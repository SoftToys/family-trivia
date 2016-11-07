import { Injectable, EventEmitter } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as rx from 'rxjs/Rx';
import { LoginResponse } from './account.models';
import Globals = require('./globals');
import {
  FacebookService, FacebookLoginOptions, FacebookLoginResponse,
  FacebookInitParams, FacebookLoginStatus
} from 'ng2-facebook-sdk/dist';
import { EnvConfig, IMAGES_ROOT } from './globals';
import { MessageBusService, Events, IMessage } from './message-bus.service';


@Injectable()
export class IdentityService {
  private _token: string;
  private _icon: string;
  private _decodedToken: any;

  constructor(private router: Router, private _http: Http, private config: EnvConfig,
    private facebook: FacebookService, private _bus: MessageBusService) {
    this.icon = localStorage.getItem('triv.icon') || IMAGES_ROOT + '/theme/no-photo.png';
    this.token = localStorage.getItem('triv.token');

    _bus.events.subscribe((e: IMessage) => {
      if (e.eventId === Events.HttpError && e.data.status === 401) {
        console.log('onUnAuthorized!! sign out flow!');
        this.logout(e.data);
      }
    });
  }

  get isRegistered(): boolean {
    let registered = false;
    if (this._decodedToken) {
      registered = this._decodedToken['IsRegistered'] === true;
    }
    console.log(`isRegistered prop: ${registered}`);
    return registered;
  }
  get userId(): string {
    if (this._decodedToken) {
      return this._decodedToken['Id'];
    }
    return '';
  }

  get token(): string {
    return this._token;
  }
  set token(t: string) {
    this._token = t;
    if (t && t != null && t.length > 0) {
      let helper: JwtHelper = new JwtHelper();

      this._decodedToken = helper.decodeToken(t);
      localStorage.setItem('triv.token', t);
    } else {
      localStorage.removeItem('triv.token');
      this._decodedToken = null;
    }
  }

  get icon(): string {
    return this._icon;
  }
  set icon(ic: string) {
    this._icon = ic;
    localStorage.setItem('triv.icon', ic);
  }

  public isAuthenticated(): boolean {
    let jwtHelper: JwtHelper = new JwtHelper();
    if (this.token && this.token.length > 0 && !jwtHelper.isTokenExpired(this.token)) {
      return true;
    }
    console.log('isAuthenticated false');
    return false;
  }
  public logout(error?: any): void {
    this.token = '';
    this.icon = IMAGES_ROOT + '/theme/no-photo.png';
    this.router.navigate(['/']);
  }

  public loginFacebook(): void {

    let facebookParams: FacebookInitParams = {
      appId: this.config.facebookAppId,
      status: true, // check login status
      xfbml: true,  // parse social plugins on this page
      version: 'v2.3' // use version 2.2
    };
    this.facebook.init(facebookParams);


    let logOptions: FacebookLoginOptions = { scope: 'email', return_scopes: true };

    this.facebook.login(logOptions)
      .then((resp) => this.onFacebookLoginSuccess(resp))
      .catch((reason: any) => { });
  }

  private onFacebookLoginSuccess(resp: FacebookLoginResponse) {

    let headers = new Headers();
    headers.append('Authorization', `Bearer ${this.token}`);
    this._http.post(`${this.config.baseUrl}/api/Account/FacebookLogin`, resp.authResponse, { headers: headers })
      .map((res: Response) => <any>res.json())
      .subscribe(r => {
        this.icon = r.icon;
        this.token = r.token;
        this._bus.events.emit({ eventId: Events.UserRegistered, data: {} });
      });
  }
}

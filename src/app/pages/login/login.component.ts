import { Router } from '@angular/router';
import { MessageBusService, IMessage, Events } from './../../message-bus.service';
import { IdentityService } from './../../identity.service';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./login.scss')],
  template: require('./login.html'),
})
export class Login {
  constructor(private _identityService: IdentityService,
    private _bus: MessageBusService, private router: Router) {
    if (this._identityService.isAuthenticated()) {
      this.router.navigate(['/pages']);
    }
  }

  private facebookLogin() {
    this._identityService.loginFacebook();
    this._bus.events
      .subscribe((m: IMessage) => {
        if (m.eventId === Events.UserRegistered) {
          this.router.navigate(['/pages']);
        }
      });
  }
}

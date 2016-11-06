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

  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;

  constructor(fb: FormBuilder, private _identityService: IdentityService,
   private _bus: MessageBusService, private router: Router) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      // console.log(values);
    }
  }
  private facebookLogin() {
    this._identityService.loginFacebook();
    this._bus.events
      .subscribe((m: IMessage) => {
        if (m.eventId === Events.UserRegistered) {
          this.router.navigate(['/']);
        }
      });
  }
}

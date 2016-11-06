import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IdentityService } from './identity.service';
import {
  CanActivate, Router, Routes, RouterModule,
  RouterStateSnapshot, ActivatedRouteSnapshot
} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(protected router: Router, protected authService: IdentityService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | boolean {

    //if (state.url !== '/auth' && !this.authService.isAuthenticated()) {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
      //this.authService.loginFacebook();
      return false;
    }
    return true;
  }
}

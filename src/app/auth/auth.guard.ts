import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router'
import { Observable } from 'rxjs'
import { AuthService } from './service/auth.service'

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  validSignUpPath = '/auth/sign-up'
  validSignInPath = '/auth/sign-in'
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    let userOnline = null
    this.authService.userOnline$.subscribe((user) => {
      userOnline = user
    })
    if (
      userOnline ||
      state.url === this.validSignInPath ||
      state.url === this.validSignUpPath
    ) {
      return true
    } else {
      this.authService.logout()
      this.router.navigate(['/auth/sign-in'])
      return false
    }
  }
}

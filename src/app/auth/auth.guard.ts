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
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return new Observable((observer) => {
      this.authService.getUser().subscribe((user) => {
        if (user) {
          console.log(user)
          observer.next(true)
        } else {
          observer.next(false)
          this.authService.logout()
          this.router.navigate(['/auth/sign-in'])
        }
      })
    })
  }
}

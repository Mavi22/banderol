import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router'
import { AuthService } from './service/auth.service'
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return new Observable((observer) => {
      this.authService.getUser().subscribe((user) => {
        if (!user) {
          observer.next(true)
        } else {
          if (state.url !== 'main') {
            this.router.navigate(['main'])
          }
          observer.next(false)
        }
      })
    })
  }
}

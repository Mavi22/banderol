import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { AuthService } from '../../auth/service/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  constructor(readonly authService: AuthService, readonly router: Router) {}
  ngOnInit(): void {}

  Logout(): void {
    this.authService.logout().then(() => {
      this.router.navigate(['/auth/sign-in'])
    })
  }
}

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core'
import { AuthService } from '../../auth/service/auth.service'
import { Router } from '@angular/router'
import firebase from 'firebase'
import User = firebase.User

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  user!: User | null
  constructor(
    readonly authService: AuthService,
    readonly router: Router,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.authService.getUser().subscribe((user) => {
      this.user = user
      this.cdr.markForCheck()
    })
  }

  logout(): void {
    this.authService.logout().then(() => {
      localStorage.clear()
      this.router.navigate(['/auth/sign-in'])
      this.cdr.markForCheck()
    })
  }
}

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../../service/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-sign-in',
  templateUrl: 'sign-in.component.html',
  styleUrls: ['sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent implements OnInit {
  hide = true
  error = ''
  form = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
    ],
    password: ['', [Validators.required, Validators.minLength(8)]],
  })
  constructor(
    readonly fb: FormBuilder,
    readonly authService: AuthService,
    readonly router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  toggle(): void {
    this.hide = !this.hide
  }

  onSignIn(): void {
    this.authService
      .onSignIn(this.form.value.email, this.form.value.password)
      .subscribe(
        (user) => {
          console.log(user)
          if (user) {
            this.router.navigate(['/main'])
            this.form.reset()
          }
        },
        (error) => {
          this.error = error.message
          this.cdr.markForCheck()
        }
      )
  }
}

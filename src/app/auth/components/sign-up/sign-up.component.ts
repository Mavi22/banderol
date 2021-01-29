import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnInit,
} from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import { authAction } from '../../store/actions/auth.action'
import { AuthService } from '../../service/auth.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: 'sign-up.component.html',
  styleUrls: ['sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent implements OnInit, OnChanges {
  hide = true
  error = ''
  form = this.fb.group({
    firstName: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
    lastName: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
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
    private fb: FormBuilder,
    private store: Store,
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  ngOnChanges(): void {}

  onSignUp(): void {
    this.authService
      .onSignUp(this.form.value.email, this.form.value.password)
      .subscribe(
        (user) => {
          console.log('user', user)
        },
        (error) => {
          this.error = error.message
          this.cdr.detectChanges()
        }
      )
    this.store.dispatch(authAction(this.form.value))
    this.form.reset()
  }

  toggle(): void {
    this.hide = !this.hide
  }
}

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../../service/auth.service'
import { Router } from '@angular/router'
import { select, Store } from '@ngrx/store'
import { authAction } from '../../store/actions/auth.action'
import { Observable } from 'rxjs'
import { isAuthSelector } from '../../store/selectors'
import { AppStateInterface } from '../../../shared/type/appState.interface'

@Component({
  selector: 'app-sign-in',
  templateUrl: 'sign-in.component.html',
  styleUrls: ['sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent implements OnInit {
  hide = true
  error = ''
  form!: FormGroup

  constructor(
    readonly fb: FormBuilder,
    readonly authService: AuthService,
    readonly router: Router,
    private cdr: ChangeDetectorRef,
    private store: Store<AppStateInterface>
  ) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValue()
  }

  initializeForm(): void {
    this.form = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  initializeValue(): void {
    this.store.pipe(select(isAuthSelector))
  }

  toggle(): void {
    this.hide = !this.hide
  }

  onSignIn(): void {
    this.authService
      .onSignIn(this.form.value.email, this.form.value.password)
      .subscribe(
        (user) => {
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
    this.store.dispatch(authAction(this.form.value))
    this.form.reset()
  }
}

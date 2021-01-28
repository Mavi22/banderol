import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../../service/auth.service'
import { SpinnerService } from '../../../shared/components/service/spinner.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: 'sign-in.component.html',
  styleUrls: ['sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  hide = true
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  })
  constructor(readonly fb: FormBuilder, readonly authService: AuthService) {}

  ngOnInit(): void {}

  toggle(): void {
    this.hide = !this.hide
  }

  onSignIn(): void {
    this.form.reset()
  }
}

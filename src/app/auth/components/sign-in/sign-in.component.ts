import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'

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
  constructor(readonly fb: FormBuilder) {}

  ngOnInit(): void {}

  onSignUp(): void {
    this.form.reset()
  }

  toggle(): void {
    this.hide = !this.hide
  }
  onSignIn(): void {}
}

import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-sign-up',
  templateUrl: 'sign-up.component.html',
  styleUrls: ['sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  hide = true
  form = this.fb.group({
    firstName: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
    lastName: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  })

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSignUp(): void {
    this.form.reset()
  }

  toggle(): void {
    this.hide = !this.hide
  }
}

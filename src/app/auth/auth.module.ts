import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AuthRoutingModule } from './auth-routing.module'
import { SignInComponent } from './components/sign-in/sign-in.component'
import { SignUpComponent } from './components/sign-up/sign-up.component'
import { ReactiveFormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'
import { reducers } from './store/reducers'

const components = [SignInComponent, SignUpComponent]

const modules = [
  CommonModule,
  AuthRoutingModule,
  ReactiveFormsModule,
  StoreModule.forFeature('auth', reducers),
]

@NgModule({
  imports: [...modules],
  declarations: [...components],
})
export class AuthModule {}

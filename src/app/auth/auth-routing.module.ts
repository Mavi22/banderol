import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SignInComponent } from './components/sign-in/sign-in.component'
import { SignUpComponent } from './components/sign-up/sign-up.component'
import { LoginGuard } from './login.guard'

const routs: Routes = [
  { path: 'sign-in', component: SignInComponent, canActivate: [LoginGuard] },
  { path: 'sign-up', component: SignUpComponent, canActivate: [LoginGuard] },
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [RouterModule.forChild(routs)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}

import { NgModule } from '@angular/core'
import { AuthComponent } from './components/auth/auth.component'
import { CommonModule } from '@angular/common'
import { AuthRoutingModule } from './auth-routing.module'

@NgModule({
  imports: [CommonModule, AuthRoutingModule],
  declarations: [AuthComponent],
})
export class AuthModule {}

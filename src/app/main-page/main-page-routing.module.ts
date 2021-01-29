import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MainPageComponent } from './component/main-page.component'
import { AuthGuard } from '../auth/auth.guard'

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    canActivate: [AuthGuard],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}

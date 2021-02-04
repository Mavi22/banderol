import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { AuthService } from './auth/service/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'banderol'
  constructor(readonly authService: AuthService) {}
}

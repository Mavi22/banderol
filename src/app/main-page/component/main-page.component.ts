import { ChangeDetectionStrategy, Component } from '@angular/core'
import firebase from 'firebase/app'

@Component({
  selector: 'app-main-page',
  templateUrl: 'main-page.component.html',
  styleUrls: ['main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent {
  constructor() {}
}

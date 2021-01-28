import { Component } from '@angular/core'
import { SpinnerService } from '../service/spinner.service'

@Component({
  selector: 'app-spinner',
  template: `
    <div id="cube-loader" *ngIf="spinnerService.spinner$ | async">
      <div class="caption">
        <div class="cube-loader">
          <div class="cube loader-1"></div>
          <div class="cube loader-2"></div>
          <div class="cube loader-4"></div>
          <div class="cube loader-3"></div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['spinner.component.scss'],
})
export class SpinnerComponent {
  constructor(public spinnerService: SpinnerService) {}
}

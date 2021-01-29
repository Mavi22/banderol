import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class SpinnerService {
  public readonly spinner$ = new BehaviorSubject<boolean>(false)
}

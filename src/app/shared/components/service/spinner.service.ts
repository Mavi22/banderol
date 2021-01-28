import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable()
export class SpinnerService {
  spinner$ = new BehaviorSubject<boolean>(false)
}

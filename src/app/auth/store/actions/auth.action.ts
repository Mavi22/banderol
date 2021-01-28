import { createAction, props } from '@ngrx/store'

import { ActionTypes } from '../actionTypes'
import { AuthUserInterface } from '../../type/auth.interface'

export const authAction = createAction(
  ActionTypes.AUTH,
  props<AuthUserInterface>()
)

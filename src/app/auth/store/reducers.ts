import { AuthStateInterface } from '../type/authState.interface'
import { Action, createReducer, on } from '@ngrx/store'
import { authAction } from './actions/auth.action'

const initialSate: AuthStateInterface = {
  isAuth: false,
}

const authReducer = createReducer(
  initialSate,
  on(
    authAction,
    (state): AuthStateInterface => ({
      ...state,
      isAuth: true,
    })
  )
)

export function reducers(
  state: AuthStateInterface,
  action: Action
): AuthStateInterface {
  return authReducer(state, action)
}

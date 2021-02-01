import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AppStateInterface } from '../../shared/type/appState.interface'
import { AuthStateInterface } from '../type/authState.interface'

export const authFeatureSelector = createFeatureSelector<
  AppStateInterface,
  AuthStateInterface
>('auth')

export const isAuthSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isAuth
)

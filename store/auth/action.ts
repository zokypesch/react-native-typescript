// action of auth

import { AuthState, LOGIN, LOGOUT, CheckAuthTypes } from './types'

// TypeScript infers that this function is returning SendMessageAction
export function login(newAuthState: AuthState): CheckAuthTypes {
  return {
    type: LOGIN,
    payload: newAuthState
  }
}

// TypeScript infers that this function is returning DeleteMessageAction
export function logout(email: string): CheckAuthTypes {
  return {
    type: LOGOUT,
    meta: {
      email
    }
  }
}
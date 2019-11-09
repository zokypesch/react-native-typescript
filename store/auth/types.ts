// authtentacation

export interface AuthState {
    loggedIn: boolean
    token: string
    email: string
  }

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

interface LoginAction {
  type: typeof LOGIN
  payload: AuthState
}

interface LogoutAction {
  type: typeof LOGOUT
  meta: {
    email: string
  }
}

export type CheckAuthTypes = LoginAction | LogoutAction
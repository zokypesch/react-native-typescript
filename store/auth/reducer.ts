import {
    LOGIN,
    AuthState,
    CheckAuthTypes,
    LOGOUT
} from './types'

export const initialState: AuthState = {
    loggedIn: false,
    token: '',
    email: ''
}

export function authReducer(
    state = initialState,
    action: CheckAuthTypes
): AuthState {
    switch(action.type) {
        case LOGIN:
            return {
                ...state, ...action.payload
            }
        case LOGOUT:
            return {
                loggedIn: false, token: '', email: ''
            }
        default:
            return state
    }
}
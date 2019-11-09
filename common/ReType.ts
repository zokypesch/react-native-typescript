import {initialState as messageState} from '../store/message/reducer'
import {initialState as authState} from '../store/auth/reducer'

export interface rehydratePayload {
    authReducer: typeof authState
    chat: typeof messageState
    type: string
}
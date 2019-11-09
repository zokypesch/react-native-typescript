export interface Message {
    user?: string
    message?: string
    timestamp: number
}

export interface ChatState {
    messages: Message[]
    status: boolean
}

export const SEND_MESSAGE = 'SEND_MESSAGE'
export const DELETE_MESSAGE = 'DELETE_MESSAGE'
export const TEST_MESSAGE = 'TEST_MESSAGE'
export const REHYDRATE = 'persist/REHYDRATE'

interface SendMessageAction {
  type: typeof SEND_MESSAGE
  payload: Message
}

interface DeleteMessageAction {
  type: typeof DELETE_MESSAGE
  // timestamp: number
  // payload: Message
}

interface TestMessageAction {
  type: typeof TEST_MESSAGE
  payload?: Message
  // payload: Message
}

interface RehydrateAction {
  type: typeof REHYDRATE
  payload?: any
}

export type ChatActionTypes = SendMessageAction | DeleteMessageAction | TestMessageAction | RehydrateAction

export type SendMessageType = SendMessageAction
 // meta: {
  //   timestamp: number
  // }
  // payload: Message
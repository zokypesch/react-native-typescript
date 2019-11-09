import { Message, SEND_MESSAGE, DELETE_MESSAGE, TEST_MESSAGE, ChatActionTypes } from './types'

// TypeScript infers that this function is returning SendMessageAction
// export function sendMessage(newMessage: Message): ChatActionTypes {
  export function sendMessage(newMessage: Message): ChatActionTypes {
  return {
    type: SEND_MESSAGE,
    payload: newMessage
  }
}

// TypeScript infers that this function is returning DeleteMessageAction
export function deleteMessage(): ChatActionTypes {
  // let newMsg: Message =  {
  //   timestamp: timestamp
  // }
  return {
    type: DELETE_MESSAGE,
    // timestamp: time
    // payload: newMessage
    // meta: {
    //   timestamp
    // }
    // payload: {
    //   timestamp: timestamp
    // }
  }
}

export function testMessage(newMessage?: Message): ChatActionTypes {
  return {
    type: TEST_MESSAGE,
    payload: newMessage
  }
}
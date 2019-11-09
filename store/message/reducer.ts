import {
    ChatState,
    ChatActionTypes,
    SEND_MESSAGE,
    DELETE_MESSAGE,
    TEST_MESSAGE,
    Message,
    REHYDRATE
  } from './types'
  // import { REHYDRATE } from 'redux-persist';
import {rehydratePayload} from '../../common/ReType'

export const initialState: ChatState = {
    messages: [],
    status: false,
  }
  
  export function chatReducer(
    state = initialState,
    action: ChatActionTypes
  ): ChatState {
    switch (action.type) {
      case REHYDRATE:
          // console.log(action)
          let payData = () => {
            if (action.payload !== undefined) {
                let payData: rehydratePayload = action.payload
                console.log(payData, "paydata")
                return payData.chat.messages
            }
            return []
          }
          
          return {
            messages: [...payData()],
            status: true
          }
      case SEND_MESSAGE:
        return {
          messages: [...state.messages],
          status: true
        }
      case DELETE_MESSAGE:
        return {
          messages: state.messages.filter(
            // message => message.timestamp !== action.meta.timestamp
            // message => message.timestamp !== action.payload.timestamp
            message => message.timestamp !== 0
          ),
          status: false
        }
      case TEST_MESSAGE:
          var newMessage : Message = {
            timestamp: 100
          };
          if (action.payload !== undefined) {
            newMessage = action.payload
          }
          return {
            messages: [...state.messages, newMessage],
            status: false
          }
      default:
        return state
    }
  }

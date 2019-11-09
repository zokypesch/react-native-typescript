import { call, put, takeLatest, all } from 'redux-saga/effects';
// import {TEST_MESSAGE, SEND_MESSAGE, ChatActionTypes, Message, SendMessageType} from './types'
import {SEND_MESSAGE, Message, SendMessageType} from './types'
import {testMessage} from './action'
import ExampleApi, {ServerData} from '../api/ExampleApi'

export function* watchNewMessage() {
  yield takeLatest(
    SEND_MESSAGE,
    sendingAllMessage
  );
}

function* sendingAllMessage(data: SendMessageType) {
  // function* sendingAllMessage(data: ChatActionTypes) {
  //  console.log(data)
  // const generatedChat = yield call(generateNewMessageWithDelay, data.payload);
  //   yield put({ type: TEST_MESSAGE, payload: generatedChat });
  // yield put(testMessage(generatedChat));
  // example with api
  try {
    const newRequest = yield call(ExampleApi.tryMe, data.payload.message)
    // console.log(newRequest.data)
    if (newRequest.status === 200) {
      const response = newRequest.data
      const newPayload: Message = data.payload

      let dataResult:  ServerData = (typeof response === "string") ? JSON.parse(response) : response;
      newPayload.message = dataResult.title

      console.log(response, newPayload)
      yield put(testMessage(data.payload));
    }

  } catch(error) {
    console.log(error.response)
  }
  
}
const generateNewMessageWithDelay = (data: Message): Promise<Message> => {
  const promise = new Promise<Message>(resolve => {
    setTimeout(() => {
      data.timestamp = 1000
      resolve(data);
    }, 2000);
  });

  return promise;
};
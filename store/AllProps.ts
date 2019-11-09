import { ChatActionTypes, Message } from '../store/message/types'
import { sendMessage, deleteMessage, testMessage } from '../store/message/action';

import { CheckAuthTypes } from '../store/auth/types'
import { login, logout } from '../store/auth/action';

import {AppState} from '../store'
import {bindActionCreators, Dispatch} from 'redux';

export const mapStateToProps = (state: AppState) => ({
    chat: state.chat,
});

// export const fetchAllAssets = () => (dispatch: Dispatch<IGetAllAssets | ISetAllAssets>) => {}

export const mapDispatchToProps = (dispatch: Dispatch<ChatActionTypes | CheckAuthTypes >) =>
  bindActionCreators(
    {
        onSendMessage: (newMsg: Message) => sendMessage(newMsg),
        onDeleteMessage: () => deleteMessage(),
        onLogin: login,
        onLogout: logout,
        onTest: testMessage
    },
    dispatch
);

export type TypeAllProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> 
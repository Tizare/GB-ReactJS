import { addMessage, ADD_MESSAGE_SAGA } from "./message/actions";
import { put, delay, takeLatest } from "redux-saga/effects"

function* onAddMessageSaga(action) {
    yield put(addMessage(action.payload.chatId, action.payload.message));

    if (action.payload.message.author !== "Bot"){
        const botMessage ={
            text: `Бот внимательно тебя слушает`,
            author: "Bot"
        }
        yield delay(2000);
        yield put(addMessage(action.payload.chatId, botMessage));
    }
}

function* mySaga(){
    yield takeLatest(ADD_MESSAGE_SAGA, onAddMessageSaga)
}

export default mySaga

//не используется :(
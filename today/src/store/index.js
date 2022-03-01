import { combineReducers, createStore } from "redux"
import profileReducer from "./profile/reducer"
import chatReducer from "./chats/reducer";
import messagesReducer from "./message/reducer";

const reducers = combineReducers({
    chats: chatReducer,
    message: messagesReducer,
    profile: profileReducer
})
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
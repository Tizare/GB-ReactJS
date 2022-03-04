import { applyMiddleware, combineReducers, createStore } from "redux"
import profileReducer from "./profile/reducer"
import chatReducer from "./chats/reducer";
import messagesReducer from "./message/reducer";
import { compose } from "@mui/system";
import thunk from "redux-thunk"
import { persistReducer, persistStore} from "redux-persist"
import storage from "redux-persist/lib/storage";

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

const persistConfig = {
    key: "root",
    storage,
}

const reducers = combineReducers({
    chats: chatReducer,
    message: messagesReducer,
    profile: profileReducer
})

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, composeEnhacers(applyMiddleware(thunk)));

export const persistor = persistStore(store);

export default store
import { ADD_MESSAGE } from "./actions";

const initialState = {messageList: {
    id0: [{text: "Добро пожаловать в чат!", author: "Bot", id: "id00"}]
}};

const messagesReducer = (state=initialState, action)=>{
    switch(action.type){
        case ADD_MESSAGE:
            const {chatId, message} = action.payload;
            const currentList = state.messageList[chatId]||[];
            return {...state, messageList:{
                ...state.messageList, [chatId]:[
                    ...currentList, {...message, id:`${chatId}${currentList.length}`}]
            }}
        default: return state;
    }
}

export default messagesReducer;
import { ADD_CHAT } from "./actions";

const initialState = {chatList:[{id:"id0", name:"Основной чат"}]};
const chatReducer = (state=initialState, action)=>{
    switch (action.type){
        case ADD_CHAT:
            return {...state, chatList:[...state.chatList, {id:`id${state.chatList.length}`, name:action.payload}]}
        default: return state;
    }
}
export default chatReducer;
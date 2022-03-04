import { addMessage } from "./message/actions";

// const middleware = store => next => action => {
//     if (action.type === ADD_MESSAGE && action.payload.message.author !== "Bot"){
//         const botMessage = {
//             text: `Бот внимательно тебя слушает`,
//             author: "Bot"}
//         setTimeout( ()=> store.dispatch(addMessage(action.payload.chatId, botMessage)), 2000)
//     }
//     return next(action);
// }

// export default middleware

const addMessageWithThunk = (chatId, message) => (dispatch, getState) => {
    dispatch(addMessage(chatId, message));
    if (message.author !== "Bot") {
        const botMessage = {
            text: `Бот от Thunk слушает тебя внимательнее всех`,
            author: "Bot"};
        setTimeout( ()=> dispatch(addMessage(chatId, botMessage)), 2000) 
    }
}
export default addMessageWithThunk
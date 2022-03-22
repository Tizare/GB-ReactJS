export const ADD_MESSAGE = "MESSAGE::ADD_MESSAGE";
export const ADD_MESSAGE_SAGA = "MESSAGE::ADD_MESSAGE_SAGA"
export const UPDATE_MESSAGE = "MESSAGE::UPDATE_MESSAGE";

export const addMessage = (chatId, message)=>({
    type: ADD_MESSAGE,
    payload: {
        chatId: chatId,
        message: message
    }

})
export const addMessageSaga = (chatId, message)=>({
    type: ADD_MESSAGE_SAGA,
    payload: {
        chatId: chatId,
        message: message
    }

})
export const updateMessages = (chatId, message) => ({
    type: UPDATE_MESSAGE,
    chatId,
    message
})
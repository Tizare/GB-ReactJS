import firebase from "../services/firebase";
import { addMessage } from "./message/actions";
import { getDatabase, ref, push, set, remove, onValue } from "firebase/database"
import { chatListUpdate } from "./chats/actions";
import { updateMessages } from "./message/actions";


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

export const addChatWithFB = (name) => async() => {
    const db = getDatabase(firebase);
    const chatRef = ref(db, "/chats");
    const newChatRef = push(chatRef);
    set(newChatRef, {name: name})
}

export const deleteChatWithFB = (id) => async () => {
    const db = getDatabase(firebase);
    const chatRef = ref(db, `/chats/${id}`);
    const messagesRef = ref(db, `/messages/${id}`)
    remove(chatRef).then(res=>{
        console.log("Удалено", res);
    });
    remove(messagesRef).then(res=>{
        console.log(res);
    })

}

export const initTrackerWithFB = () => async (dispatch) => {
    const db = getDatabase(firebase);
    const chatRef = ref(db, `/chats`);
    onValue(chatRef, (snapshot)=>{
        const data = snapshot.val();
        const chatIds = Object.keys(data);
        const chatArr = chatIds.map(item => ({id:item, name:data[item].name}))
        dispatch(chatListUpdate(chatArr));
    })
}

export const getMessagesByChatIDwithFB = (chatId) => async (dispatch) => {
    const db = getDatabase(firebase);
    const msgRef = ref(db, `/messages/${chatId}`);

    onValue(msgRef, (snapshot)=>{
        const data = snapshot.val();
        const msg = data && Object.values(data);
        if (msg?.length > 0){
            dispatch(updateMessages(chatId, msg))
        }
    })
}

export const addMessageWithFB = (chatId, message) => async () => {
    const db = getDatabase(firebase);
    const messageRef = ref(db, `/messages/${chatId}`);
    const newMessageRef = push(messageRef);
    set(newMessageRef, message)
}

export const addNewFrofileWithFB = (password) => async () => {
    const db = getDatabase(firebase);
    const profileRef = ref(db, `/users`);
    const newProfileRef = push(profileRef);
    set(newProfileRef, {password: password})
}

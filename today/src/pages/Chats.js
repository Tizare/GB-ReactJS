import '../App.css'; 
import { useState } from "react";
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';
import ChatList from '../components/ChatList';
import MessageList from '../components/MessageList';
import { IconButton } from '@mui/material';
import AddCommentIcon from '@mui/icons-material/AddComment';

const initChats = {
    id1: {
        name: "Чат 1",
        messages: [
            {text: 'Это текст, написанный пользователем.', user: 'Bot'},
            {text: 'Я ещё ничего не писал!' , user: "Пользователь"},
            {text: 'И не надо - мы всё можем сделать за Вас! :Р', user: 'Bot'}
        ]
    },
    id2: {
        name: "Чат 2",
        messages: [
            {text: 'В этом чате всё паутиной поросло', user: 'Bot'},
        ]  
    },
    id3: {
        name: "Чат 3",
        messages: [
            {text: 'Всем привет!', user: 'Некто'},
            {text: 'Всем здравия!' , user: "Кто-то"},
            {text: 'Доброго дня!', user: 'Bot'}
        ]
    }
}

const Chats = ()=>{
    const [chats, setChats] = useState(initChats);
    const { chatId } = useParams();
    const addChat = ()=>{
        let newId = 'id'+(Object.keys(chats).length+1)
        setChats( {...chats, [newId]: {
            name: "Чат "+(Object.keys(chats).length+1),
            messages: [{text: 'Этот чат пока пустой', user: 'Bot'}]}
        })           
    }

    if(!chats[chatId]){
        return <NotFound/>
    }
    return (
        <>
        <h2 className='chatsHeader'>Архив чатов</h2>
            <div className='chatsMain'>
                <div>
                    <ChatList chats={chats}/>
                    <IconButton onClick={addChat} aria-label="delete" size="large">
                        <AddCommentIcon fontSize="inherit" />
                    </IconButton>
                </div>
                <MessageList messages={chats[chatId].messages}/>
            </div>
        </>
    )
}

export default Chats
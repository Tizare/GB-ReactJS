import '../App.css'; 
import { useState } from "react";
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';
import ChatList from '../components/ChatList';
import MessageList from '../components/MessageList';

const initChats = {
    id1: {
        name: "Чат 1",
        messages: [
            {text: 'текст первого чата', user: 'Bot'},
            {text: 'Я ещё ничего не писал!' , user: "Вы"},
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

    if(!chats[chatId]){
        return <NotFound/>
    }
    return (
    <div>
        <ChatList chats={chats}/>
        <MessageList messages={chats[chatId].messages}/>
    </div>)
}

export default Chats
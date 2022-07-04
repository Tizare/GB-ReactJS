import '../App.css'; 
import ChatList from '../components/ChatList';
import MessageList from '../components/MessageList';

const Chats = ()=>{
    return (
        <>
        <h2 className='chatsHeader'>Чаты</h2>
            <div className='chatsMain'>
                <div><ChatList/></div>
                <MessageList/>
            </div>
        </>
    )
}

export default Chats
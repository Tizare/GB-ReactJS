import "../App";
import { useParams, Link } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Button, Dialog, TextField, IconButton } from "@mui/material";
import AddCommentIcon from '@mui/icons-material/AddComment';
import { getChatList, } from "../store/selectors";
import DeleteIcon from '@mui/icons-material/Delete';
import { addChatWithFB, deleteChatWithFB, initTrackerWithFB } from "../store/middleware";
import { mainChat } from "./constants";


const ChatList = ()=>{
    const dispatch = useDispatch();
    const {chatId} = useParams();
    const chats = useSelector(getChatList, shallowEqual);
    const [visible, setVisible] = useState(false);
    const [chatName, setChatName] = useState("");

    const handleOpen = () => setVisible(true);
    const handleChange = (event) => setChatName(event.target.value)
    const onAddChat = () =>{
        if(chatName!==""){
            dispatch(addChatWithFB(chatName));
            setChatName('');
            setVisible(false);
    }};
    const cancelClick = () => setVisible(false)

    const removeChat = (index) => {
        if (index!==mainChat){
            dispatch(deleteChatWithFB(index))
    }}

    useEffect(()=>{
        dispatch(initTrackerWithFB());
    }, [])

    return (
        <>
            <div>
                {chats?.map((chat, index)=>(
                    <div key={index} className="chatItem">
                        <Link to={`/chats/${chat.id}`}><b style={{color: chat.id===chatId?"#88affc":"white"}}>{chat.name}</b>
                        </Link>
                        <IconButton onClick={()=>removeChat(chat.id)}><DeleteIcon fontSize="small"/></IconButton>
                    </div>
                ))}
            </div>
            <IconButton onClick={handleOpen} aria-label="delete" size="large">
                        <AddCommentIcon fontSize="inherit" />
            </IconButton>
            <Dialog open={visible} onClose={()=>setVisible(false)}>
                <TextField autoFocus value={chatName} onChange={handleChange} />
                <div className="dialogButtons">
                    <Button onClick={onAddChat}>Создать</Button>
                    <Button onClick={cancelClick}>Передумать</Button>
                </div>
            </Dialog>
        </>
    )
}

export default ChatList
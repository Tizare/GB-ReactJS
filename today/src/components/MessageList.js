import { List, ListItem, ListItemIcon, ListItemText, TextField, Button } from "@mui/material";
import AndroidIcon from '@mui/icons-material/Android';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Send from '@mui/icons-material/Send';
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addMessage } from "../store/message/actions";
import { getChatList, getMessageList, getName } from "../store/selectors";


const MessageList = ()=>{
    const chats = useSelector(getChatList, shallowEqual);
    const allMessages = useSelector(getMessageList, shallowEqual);
    const { chatId } = useParams();
    const messages = allMessages[chatId];
    const {name} = useSelector(getName, shallowEqual)
    
    const [textValue, setTextValue] = useState();
    const dispatch = useDispatch();

    const changeText = (event)=>{
        setTextValue(event.target.value)
    }
    const sendMessage = ()=>{
        if (textValue !=="") {
            const message = {
                text: textValue,
                author: name
            }
            dispatch (addMessage(chatId, message))
            setTextValue()
        }
    }
    useEffect(()=>{
        if (messages?.length>0 && messages[messages.length-1]?.author !== "Bot"){
            setTimeout(()=>{
                const message = {
                    text: "Бот на связи",
                    author: "Bot"
                }
                dispatch(addMessage(chatId, message))
            }, 1500);
        }
    }, [dispatch, name, chatId, messages, chats]
    )

    return (
        <div className="messageBox">
            <div className="messageList">
                <List sx={{ width: '100%', maxWidth: 600}}>
                    {messages?.map((item)=>(
                        <ListItem key={item.id}>
                            <ListItemIcon >{item.author==="Bot"?<AndroidIcon/>:<AccountCircleIcon/>}</ListItemIcon>
                            <ListItemText primary={item.text} secondary={item.author} />
                        </ListItem>
                    ))}
                </List>
            </div>
            <div className="sendMessage">
                <TextField autoFocus multiline fullWidth id="outlined-basic" label="Ваше сообщение" variant="outlined" margin="normal" valid={textValue} onChange={changeText} />
                <Button variant="outlined" endIcon={<Send/>} onClick={sendMessage}>Отправить</Button>
            </div>
        </div>
    )
}

export default MessageList
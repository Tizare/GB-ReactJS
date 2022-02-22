import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import AndroidIcon from '@mui/icons-material/Android';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const MessageList = (props)=>{
    const {messages} = props;

    return (
        <div className="messageList">
            <List sx={{ width: '100%', maxWidth: 600}}>
                {messages?.map((item, index)=>(
                    <ListItem key={index}>
                        <ListItemIcon >{item.user==="Bot"?<AndroidIcon/>:<AccountCircleIcon/>}</ListItemIcon>
                        <ListItemText primary={item.text} secondary={item.user} />
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

export default MessageList
import { List, Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import AndroidIcon from '@mui/icons-material/Android';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const MessageList = (props)=>{
    const {messages} = props;

    return (
        <div>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {messages?.map((item, index)=>(
                    <ListItem key={index}>
                        <ListItemAvatar>
                            <Avatar>{item.user==="Bot"?<AndroidIcon/>:<AccountCircleIcon/>}</Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={item.text} secondary={item.user} />
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

export default MessageList
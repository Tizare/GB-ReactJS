import "../App";

import { useParams, Link } from "react-router-dom";

const ChatList = (props)=>{
    const {chatId} = useParams();
    const {chats} = props;

    return (
    <div>
        {Object.keys(chats).map((id, index)=>(
            <div key={index} className="chatItem">
                <Link to={`/chats/${id}`}><b style={{color: id===chatId?"#88affc":"white"}}>{chats[id].name}</b>
                </Link>
            </div>
        ))}
    </div>
    )
}

export default ChatList
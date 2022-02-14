import './App.css';
import Message from "./Message"
import React from 'react';
import { useState } from 'react';

const messageList = [{name:"Bot", message:"Добро пожаловать!"}];

function App(props) {
  const [list, setList] = useState(messageList)
  return (
    <div className="App">
      <Message today={props.today}/>
      <div className="ourChat">
            <form action="#">
                <input type="text" placeholder="Ваше имя"/>
                <textarea type="text" placeholder="Ваше сообщение"/>
                <button>Отправить</button>
            </form>
            <div className="allMessage">
                {list.map((item)=>(
                  <div className="message">{item.name}:<br/>{item.message}</div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default App;

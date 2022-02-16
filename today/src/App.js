import './App.css';
import Message from "./Message"
import React, {useEffect, useState} from 'react';

function App(props) {
  const [messageList, setMessageList] = useState([]);
  const [userValid, setUserValid] = useState('');
  const [textValid, setTextValid] = useState('');
  
  const changeUser = (event)=>{
    setUserValid(event.target.value)
  }
  const changeText = (event)=>{
    setTextValid(event.target.value)
  }
  const addMessage =()=>{
    if (userValid!=='' && textValid!==''){
      setMessageList([...messageList, {
        user: userValid,
        text: textValid
      }])
    } else if (userValid=="" && textValid!==''){
      setMessageList([...messageList, {
        user: "Кто-то",
        text: textValid
      }])
    } else if (userValid!=="" && textValid==''){
      setMessageList([...messageList, {
        user: userValid,
        text: 'Загадочно молчит...'
      }])
    }
    setUserValid('');
    setTextValid('');
  }

  useEffect(
    ()=>{
      setTimeout(()=>{
        setMessageList([...messageList, {
          user: "Bot",
          text: "Добро пожаловать в чат, незнакомец! Представься и оставь своё сообщение."
        }])
      },1000)
    },[]
  )

  useEffect(
    ()=>{
      setTimeout(()=>{
        if(messageList[messageList.length-1].user!=="Bot" && messageList[messageList.length-1].user!==""){
          setMessageList([...messageList, {
            user: "Bot",
            text: 'Спасибо за Ваше сообщение, оно нам очень важно!'
          }])
        }
      },1500)
    },[messageList]
  )

  return (
    <div className="App">
      <Message today={props.today}/>
      <div className="ourChat">
        <form action="#">
          <input type={"text"} valid={userValid} onChange={changeUser} placeholder={"Ваше имя"}/>
          <textarea required type={"text"} valid={textValid} onChange={changeText} placeholder={"Ваше сообщение"}/>
          <button type={"button"} onClick={addMessage} >Отправить</button>
        </form>
        <div className="allMessage">
          {messageList.map(item=>
            (<div className="message">{item.user}:<br/>{item.text}</div>))}
        </div>
      </div>
    </div>
  );
}

export default App
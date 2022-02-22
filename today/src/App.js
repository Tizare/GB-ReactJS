import './App.css';
import Header from "./Header"
import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button'
import Send from '@mui/icons-material/Send'
import {TextField} from '@mui/material'
import PersonList from './PersonList';

function App() {
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
    } else if (userValid==="" && textValid!==''){
      setMessageList([...messageList, {
        user: "Кто-то",
        text: textValid
      }])
    } else if (userValid!=="" && textValid===''){
      setMessageList([...messageList, {
        user: userValid,
        text: 'Загадочно молчит...'
      }])
    }
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
        if(messageList.length>0 && messageList[messageList.length-1].user!=="Bot" && messageList[messageList.length-1].user!==""){
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
      <Header/>
      <div className="ourChat">
        <div className="allPeople">
          <PersonList personValid={userValid}/>
          <form action="#">
            <TextField id="standard-basic" label="Ваше имя" variant="standard" valid={userValid} onChange={changeUser}/>
            <TextField autoFocus multiline id="outlined-basic" label="Ваше сообщение" variant="outlined" margin="normal" valid={textValid} onChange={changeText} />
            <Button variant="outlined" endIcon={<Send/>} onClick={addMessage}>Отправить</Button>
          </form>
        </div>
        <div className="allMessage">
          {messageList.map((item, index)=>(
            <div key={index+"MS"} className="message">{item.user}:<br/>{item.text}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App
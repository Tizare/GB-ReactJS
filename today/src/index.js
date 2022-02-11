import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const message= [
  "Сегодня у тебя всё получится!",
  "Удача на твоей стороне!",
  "Звёзды благоволят любым твоим начинаниям - начинай!",
  "Сегодня произойдёт что-то невообразимое.",
  "Это самый подходящий день, чтобы... отдохнуть.",
  "Сегодня солнце будет светить исключительно для тебя.",
  "Этот день обязательно принесёт что-то хорошее.",
  "Когда, если не сегодня?"
]
let i = parseInt(Math.random()*message.length)
const PS = "* Все люди - как люди, а я на верблюде. И я вот не знаю, куда корректнее засунуть рандомайзер выбора сообщения. Положила в index, это было проще реализовать, но, возможно, я и не права... хм..."

ReactDOM.render(
  <React.StrictMode>
    <App today={message[i]} PS={PS}/>
  </React.StrictMode>,
  document.getElementById('message')
);



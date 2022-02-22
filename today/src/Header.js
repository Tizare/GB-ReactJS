import logo from "./cookiesCat.png"
import "./App.css"
import React from "react";
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

function Header (){
    return (
        <>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>{message[i]}</p>
          </header>
        </>
      );
}

export default Header
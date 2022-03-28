import logo from "./cookiesCat.png"
import "./App.css"
import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import ForumIcon from '@mui/icons-material/Forum';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from "react-router-dom";
import { mainChat } from "./components/constants";

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
          <div className="navigation">
            <div className="navigIcon">
              <Link to={"/home"} className="navLink"><HomeIcon></HomeIcon></Link>
              <Link to={`/chats/${mainChat}`} className="navLink"><ForumIcon></ForumIcon></Link>
              <Link to={"/profile"} className="navLink"><AccountCircleIcon></AccountCircleIcon></Link>
              <Link to={"/gists"} className="navLink"><InfoIcon></InfoIcon></Link>
            </div>
            <div className="HelloFriend">Доброго дня!</div>
            <Link to={"/login"} className="navLink"><LoginIcon></LoginIcon></Link>
          </div>
        </>
      );
}

export default Header
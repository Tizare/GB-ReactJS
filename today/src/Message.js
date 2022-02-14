import logo from "./cookiesCat.png"
import "./App.css"
import React from "react";

function Message (props){
    return (
        <>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>{props.today}</p>
          </header>
        </>
      );
}

export default Message
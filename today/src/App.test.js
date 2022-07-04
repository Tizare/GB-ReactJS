import { forTest } from "./components/forTest";
import ProfileData from "./components/ProfileData";
import messagesReducer from "./store/message/reducer";
import { shallowEqual, useSelector } from "react-redux"

describe('ADD_MESSAGE test', () =>{
  it ("returns new message", () =>{
    const action ={};
    const state = {};
    action.type = "MESSAGE::UPDATE_MESSAGE";
    action.chatId = 123;
    action.message = {author: "bot", message: "I'm bot! And praud of it!"};
    
    const expected = {"messageList": {123: {"author": action.message.author, "message": action.message.message}}}
    const received = messagesReducer(state, action);
    expect(received).toEqual(expected);
  })
})

describe('the greetings of user test', ()=>{
  it("returns let's login, if there is no name", ()=>{
    const name = false;
    const days = 0;
    const expected = "Привет, незнакомец, не желаешь ли зарегистрироваться?"
    const received = forTest(name, days);
    expect(received).toEqual(expected);
  })
  it("returns 'welcome' if there is name and date of last visit lest then 5 days", ()=>{
    const name = "Alex";
    const days = 3;
    const expected = `Привет, ${name}, с возвращением!`
    const received = forTest(name, days);
    expect(received).toEqual(expected);
  })
  it("returns 'long time no see (how days)' if there is name and date of last visit more then 5 days", ()=>{
    const name = "Petra";
    const days = 100;
    const expected = `Привет, ${name}, давно не виделись! Дней - ${days} как прошло.`
    const received = forTest(name, days);
    expect(received).toEqual(expected);

  })
})


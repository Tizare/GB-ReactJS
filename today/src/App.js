import './App.css';
import Message from "./Message"

function App(props) {
  return (
    <div className="App">
      <Message today={props.today}/>
      
    </div>
  );
}

export default App;

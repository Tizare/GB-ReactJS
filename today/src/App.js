import logo from './cookiesCat.png';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{props.today}</p>
        <div className="PS">{props.PS}</div>
      </header>
    </div>
  );
}

export default App;

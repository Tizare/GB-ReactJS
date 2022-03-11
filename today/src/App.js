import './App.css';
import Header from "./Header";
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Chats from './pages/Chats';
import { GistsList } from './pages/Gists';

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/chats/:chatId" element={<Chats/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/gists" element={<GistsList/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App
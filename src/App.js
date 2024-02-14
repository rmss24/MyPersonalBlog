import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import CreatePost from './pages/createPost';
import { useState } from 'react';
import {auth} from './firebase'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { signOut } from 'firebase/auth';
import { FaPlus } from 'react-icons/fa';
function App() {
  const [isAuth, SetisAuth] = useState(localStorage.getItem("isAuth"));

  const signOutUser = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      SetisAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
      <Router>
        <nav>
          <Link to='/'>Le 3icilie</Link>
          {!isAuth ? (<Link to='/login' className='login'>Login</Link>) : (
          <>
          <Link className='createpost' to='/createpost'> < FaPlus />New post</Link>
          <button onClick={signOutUser}>Log Out</button>
          </>
          )}
        </nav>
        <Routes>
          <Route path='/' element = {<Home isAuth={isAuth}/>} />
          <Route path='/login' element = {<Login SetisAuth={SetisAuth}/>} />
          <Route path='/createpost' element = {<CreatePost isAuth = {isAuth}/>} />
        </Routes>
      </Router>
  );
}

export default App;

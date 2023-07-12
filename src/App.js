
import './App.css';
import { useState, useEffect } from 'react';
import Orderform from './Components/Client/Orderform/Orderform'
import Landing from './Components/Client/Landing/Landing';
import Login from './Components/Client/Login/Login';
import Ordertable from './Components/Client/Ordertable/Ordertable';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Components/Client/Login/Signup';
import axios from 'axios';


function App() {
  const [user, setuser]=useState({})

  useEffect(()=>{
    axios.get("http://localhost:3002/user/authenticate")
    .then((response)=>{
    
      setuser(response.data.user)
    })
    .catch((error)=>{
      console.log(error)
      setuser({})
    })
  }, [])


  return (
    <div className="App">
      <Routes>
        <Route  path='/'  element={<Landing user={user} setuser={setuser}/>}/>
        <Route path='/order'element={<Orderform user={user} setuser={setuser}/>} />
        <Route path='/login'  element={<Login setuser={setuser}/>}/>
        <Route path='/signup' Component={Signup} />
        <Route path='/review' element={< Ordertable user={user} setuser={setuser}/>}/>
        
      </Routes>
    </div>
  );
}

export default App;

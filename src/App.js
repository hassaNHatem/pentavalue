import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { useDispatch , useSelector } from 'react-redux';
import { add, selectscreens } from './DashboardSlice';
import './App.css';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
  BrowserRouter,
} from "react-router-dom";
import Phonesignup from './Phonesignup';
import Dashboard from './Dashboard';
import { user } from './firebase';
import { getdata } from './dataSlice';

function App() {
  const dispatch = useDispatch()
  console.log(useSelector(selectscreens))
  console.log(dispatch(getdata()))
  return (
    <div className="App">
      <button onClick={()=>dispatch(add({id:'an id' , newobj:'thenewobj'}))}></button>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Phonesignup/>}></Route>
        {/*to prevent the user from loggin in each time */}
        <Route path="/" element={user?<Dashboard/>:<Phonesignup/>}></Route>
        {/* server as a private route to prevent the user from routing to the dasahboard manualy*/}
        <Route path="/Dashboard" element={user?<Dashboard/>:<Phonesignup/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

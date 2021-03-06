import React from 'react';
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

function App() {
  const dispatch = useDispatch()
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Phonesignup/>}></Route>
        {/*to prevent the user from loggin in each time */}
        <Route path="/" element={user?<Dashboard/>:<Phonesignup/>}></Route>
        {/* server as a private route to prevent the user from routing to the dasahboard manualy*/}
        <Route path="/Dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

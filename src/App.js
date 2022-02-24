import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
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
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Phonesignup/>}></Route>
        <Route path="/" element={user?<Dashboard/>:<Phonesignup/>}></Route>
        <Route path="/Dashboard" element={user?<Dashboard/>:<Phonesignup/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

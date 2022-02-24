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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Phonesignup></Phonesignup>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

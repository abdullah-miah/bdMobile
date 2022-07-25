import React from 'react';
import './App.css';
import MobileView from './features/Mobile/MobileView';
import SmartPhone from './features/Mobile/SmartPhone';
import { Routes, Route } from "react-router-dom";
import Login from './Componets/Login/Login';
import Navbar from './Componets/Home/Navbar';
import Home from './Componets/Home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/'  element={<Home></Home>} ></Route>
        <Route path="login" element={<Login></Login>}  />
      </Routes>
    </div>
  );
}

export default App;

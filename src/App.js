import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './Componets/Login/Login';
import Home from './Componets/Home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/"  element={<Home></Home>} ></Route>
        <Route path="login" element={<Login></Login>}  />
      </Routes>
    </div>
  );
}

export default App;

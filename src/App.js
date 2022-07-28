import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './Componets/Login/Login';
import Navbar from './Componets/Navbar/Navbar';
import Footer from './Componets/Footer/Footer';
import Home from './Componets/Home/Home';
import SignUp from './Componets/SignUp/SignUp';
import Purchase from './Componets/Purchase/Purchase';
import RequireAuth from './Componets/Login/RequireAuth';
import MyOrders from './Componets/Dashboard/Myorder';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="login" element={<Login></Login>}  />
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='myorder' element={<MyOrders></MyOrders>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

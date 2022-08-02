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
import Dashboard from './Componets/Dashboard/Dashboard';
import ConfirmOrder from './Componets/Dashboard/ConfirmOrder';
import Review from './Componets/Dashboard/Review';
import AllUsers from './Componets/Dashboard/AllUsers';
import Payment from './Componets/Dashboard/Payment';
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
        <Route path='/payment/:id' element={
          <RequireAuth>
            <Payment></Payment>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<ConfirmOrder></ConfirmOrder>}></Route>
          <Route path='review' element={<Review></Review>}></Route>
          <Route path='allusers' element={<AllUsers/>}></Route>
          
        </Route>
        <Route path='myorder' element={<MyOrders></MyOrders>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

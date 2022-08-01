import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {Link } from "react-router-dom";
import auth from '../../firebase.init';
const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  const [orders, setOrder]= useState([]);
  useEffect(()=>{
    if(user){
        fetch(`http://localhost:5000/myorder?userEmail=${user.email}`)
        .then(res => res.json())
        .then(data => setOrder(data))
    }
   },[user]) 
    return (
        <div>
          <div className='px-36 border-2'>
            <img className='smartPhone' src='https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/wysiwyg/cmsp/Gif-Banner.gif'></img>
          </div>
          <div className='px-36 mt-4 mb-4 '>
            <span className='text-2xl text-sky-600 font-bold'>bdMobile</span>
            <input className='rounded ml-12' placeholder='search here' style={{
              border:'1px solid black',
              padding: '10px',
              width: '600px'
          }} 
            
            type='text'></input>
            <button className='btn btn-outline btn-primary ml-8'> 🔍 search</button>
            {user?
            <div class="indicator">
            <span class="indicator-item badge badge-secondary">{orders.length}</span> 
            <Link to='myorder' className='text-2xl ml-8'>🛒</Link>
          </div>
            
            :<button className='btn btn-outline btn-success ml-8'><Link to="login">🔒 Login</Link></button>}
            {user?<p></p>: <button className='btn btn-outline btn-info ml-8'> <Link to='signUp'>🔑 Register</Link></button>}
            
          </div>
          <div class="sticky top-0 navbar  px-36 bg-blue-500  text-white stiky">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to=""> Home</Link></li>
        <li tabindex="0">
          <a class="justify-between">
          Categories
          </a>
        </li>
        <li><a>Contact</a></li>
        <li><a>Login</a></li>
      </ul>
    </div>
    <div class=" hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      <li><Link to='/'>Home</Link></li>
      <li tabindex="0">
        <a>
        Categories
        </a>
      </li>
      <li><a>Contact</a></li>
    </ul>
  </div>
  </div>
  <div class="navbar-end">
    
    <ul>
    <li>{user?<button onClick={logout} class="btn btn-ghost text-white text-xl">Sign Out</button>:<p></p>}</li>
    </ul>
    <div class="avatar">
  <div class="w-12 rounded-full">
   {user?<img src={user?.photoURL}></img>:""}
  </div>
</div>
  </div>
</div>
        </div>
    );
};

export default Navbar;
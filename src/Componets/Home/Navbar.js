import React from 'react';
import {Link } from "react-router-dom";
const Navbar = () => {
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
            <button className='btn btn-outline btn-success ml-8'>
              <Link to="login">🔒 Login</Link>
            </button>
            <button className='btn btn-outline btn-info ml-8'>🔑 Register</button>
          </div>
          <div class="sticky top-0 navbar bg-base-100 px-36 bg-blue-600  text-white stiky">
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
      <li><a>Home</a></li>
      <li tabindex="0">
        <a>
        Categories
        </a>
      </li>
      <li><a>Contact</a></li>
     
    </ul>
  </div>
  </div>
 
</div>
        </div>
    );
};

export default Navbar;
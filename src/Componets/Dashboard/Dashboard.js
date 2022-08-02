import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile px-12 mt-4">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content mt-4">
     <h1 className='text-4xl ml-4 text-purple-600 font-bold'> Dashboard</h1>
    <Outlet></Outlet>
    {/* <!-- Page content here --> */}
   
  
  </div> 
  <div class="drawer-side bg-slate-600">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-60  text-xl  text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link className='text-white' to='/dashboard' > 🛒 My order</Link></li>
      <li><Link className='text-white' to='/dashboard/review'> ❇️ Review</Link></li>
      <li><Link className='text-white' to='/dashboard/allusers'> 👥 All Users </Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;
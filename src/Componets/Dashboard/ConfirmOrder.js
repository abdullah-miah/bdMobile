
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import OrderDetails from './OrderDetails';

const ConfirmOrder = () => {
    const [orders, setOrder]= useState([]);
    const [user]= useAuthState(auth)
    const {id}=useParams();
   useEffect(()=>{
    if(user){
        fetch(`http://localhost:5000/confirmOrder?userEmail=${user.email}`)
        .then(res => res.json())
        .then(data => setOrder(data))
        
    }
    
   },[user])
   
    return (
        <div className='px-12 mt-8'>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
             <div className='bg-blue-400 p-8 rounded-md'>
                <h1 className='text-2xl  text-white' >Active Orders: {orders.length}</h1>
             </div>
             <div className=' bg-yellow-300 p-8 rounded-md'>
                <h1 className='text-2xl  text-white' >Quantity:{orders[0]?.totalProduct}</h1>
             </div>
             <div className='bg-red-400 p-8 rounded-md'>
                <h1 className='text-2xl  text-white' > Status: pending....</h1>
             </div>
             <div className='bg-green-400 p-8 rounded-md'>
                <h1 className='text-2xl  text-white' >Payment: {orders[0]?.totalPrice}</h1>
             </div>


            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 mt-8'>
               <div>
                {
                    orders[0]?.productDetails.map(order =><OrderDetails
                    key={order._id}
                    order ={order}
                    orders = {orders}
                    
                    ></OrderDetails>)
                }
                
               </div>
               <div className='confirmCard2 mt-4'>
                <h1 className='text-2xl font-bold text-primary text-center'>Bill Information</h1>
                <p className='text-xl text-red-400'>Order  ID: {orders[0]?._id}</p>
                <p className='text-xl text-yellow-500 mt-4'>Total Taka : {orders[0]?.totalPrice}</p>
                <p>Address :{orders[0]?.address} </p>
                <p>Phone :{orders[0]?.phone} </p>
               </div>
            </div>
        </div>
    );
};

export default ConfirmOrder;
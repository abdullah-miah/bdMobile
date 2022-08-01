import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import OrderCart from './OrderCart';

const Myorder = () => {
    const [orders, setOrder]= useState([]);
    const [user]= useAuthState(auth)
    const {id}=useParams();
   useEffect(()=>{
    if(user){
        fetch(`http://localhost:5000/myorder?userEmail=${user.email}`)
        .then(res => res.json())
        .then(data => setOrder(data))
    }
   },[user])   
   const handleDelete = id =>{
    const proceed = window.confirm('Are you Sure');
    if(proceed){
   const url = `http://localhost:5000/myorder/${id}`
   fetch(url, {
       method: 'DELETE'
   }) 
   .then(res => res.json())
   .then(data =>{
       console.log(data);
       const remaining = orders.filter(order => order._id !== id);
       setOrder(remaining);
   })
}
} 

      let total = 0;
      orders.map(sum =>{
        total = total + sum.totalPrice
      })
      
    return (
        <div style={{width: '1170px', margin: '0 auto'}}>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
               <div>
                {
                    orders.map(order =><OrderCart
                        key={order._id}
                        order={order}
                        handleDelete={handleDelete}
                    >

                    </OrderCart>)
                }
                </div> 
                <div className='confirmCard mt-4'>
                    <h1 className='text-center text-2xl font-bold'> Order Information</h1>
                    <p className='text-xl my-4' >Total Product: {orders.length}</p>
                    <p className='text-xl my-4'>Total Taka: {total}    <small>(BDT)</small></p>
                    <from>
                    <input  required type="text" placeholder="name" class="input input-bordered my-4 w-full max-w-xs" />
                    <input required  type='email' class="input input-bordered my-4  w-full max-w-xs" />
                    <input required type="text" placeholder="phone number" class="input my-4  input-bordered w-full max-w-xs" />
                    <br/>
                    <textarea required class="textarea textarea-bordered my-4 " placeholder="address"></textarea>
                    <br/>
                    <input className='btn' type='submit' value='Confirm Order'></input>
                    </from>
                </div>
            </div>
        </div>
    );
}

;

export default Myorder;
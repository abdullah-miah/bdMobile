import React from 'react';

const OrderCart = ({order,handleDelete}) => {
     
    const {productName, img, price, quantity } = order;
   
    return (
        <div id='viewOrderCard' className='grid lg:grid-cols-4 border-2 px-4 my-4'>
           <div>
            <img className='w-1/2' src= {img}></img>
           </div>
           <div className='flex justify-center items-center'>
            <h1>{productName}</h1>
           </div>
           <div className='flex justify-center items-center'>
            <h1 className='text-red-600 text-xl'> ৳ {parseInt(price)*parseInt(quantity)}</h1>
           </div>
           <div className='flex justify-center items-center'>
            <button  onClick={()=>handleDelete(order._id)} className='btn btn-outline btn-warning'>Cancel order</button>
           </div>
           <div>

           </div>
        </div>
    );
};

export default OrderCart;
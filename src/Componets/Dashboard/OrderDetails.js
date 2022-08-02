import React from 'react';

const OrderDetails = ({order, orders}) => {
    return (
        <div>
           <div id='viewOrderCard' className='grid lg:grid-cols-5 border-2 px-6 my-4'>
           <div>
            <img className='w-1/2' src= {order.img}></img>
           </div>
           <div className='flex justify-center items-center'>
            <h1>{order.productName}</h1>
           </div>
           <div className='flex justify-center items-center'>
            <h1 className='text-primary text-xl'>  {order.quantity}</h1>
           </div>
           <div className='flex justify-center items-center'>
            <h1 className='text-red-600 text-xl'> ৳ {parseInt(order.price)*parseInt(order.quantity)}</h1>
           </div>
           <div>

           </div>
        </div>
        </div>
    );
};

export default OrderDetails;
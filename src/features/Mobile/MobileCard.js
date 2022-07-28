import React from 'react';
import { useNavigate } from 'react-router-dom';
const MobileCard = ({mobile}) => {
    const {name, brand,img,ratings,price}=mobile;
    const navigate = useNavigate();
    const handelPurchase = (id)=>{
        navigate(`/purchase/${id}`)
      }
    return (
        <div className='mt-12 border-2 rounded p-2'>
            <div >
            <img className='hoverEffect' style={{margin: '0 auto'}} width='200' height='200' src={img}></img>
            </div>
          <div className='text-center text-xl'>
          <h1> <span className='font-bold'>{name}</span></h1> 
          <h2><span className='font-bold'>{brand}</span></h2> 
          <p>Price:  <sapn className="text-red-400">{price}</sapn>  <small> (BDT)</small></p>
          <p><span className="text-red-600 font-bold"> {ratings}</span> </p>
          <button onClick={()=>handelPurchase(mobile._id)}  className='btn btn-outline btn-primary mt-4'> 🛒  Buy Now</button>
          </div>
        </div>
    );
};

export default MobileCard;
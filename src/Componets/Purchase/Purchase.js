import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const {id}=useParams();
    const [mobile, setMobiles]=useState({});
    useEffect(()=>{
        const url = `http://localhost:5000/purchase/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setMobiles(data))
    },[])
    
    return (
        <div>
            <h1 className='px-36'><span> >> </span>  {mobile.title}</h1>
           <div className='grid grid-cols-1 lg:grid-cols-3 px-36'>
            
             <div>
             <img src={mobile.img}></img>
             </div>
             <div>
                <h1 className='text-xl'>{mobile.title}</h1>
                <p>{mobile.ratings} | <a href='#'> Add Review</a></p>
                <p>Brand: {mobile.brand}</p>
                <p>Sold by: <a href='#'>{mobile.brand}</a></p>
                <img src={mobile.imgBkash}></img>
                <p>Price: {mobile.price}</p>
                <p>Warranty:<a href='#'>{mobile.Warranty}</a></p>
                <p>Color</p>
                <div class="tooltip" data-tip={mobile.color}>
                <img className='w-20 p-4 border-2'  src={mobile.img}></img>
                       </div>
                <p>P-Protect (smartphone's insurance packages for 12 months)-</p>
                <input type="radio" id="html" name="fav_language" value="none"/>
                <label for="html">None</label><br></br>
                <input type="radio" id="html" name="fav_language" value="Screen replacement + ৳480"/>
                <label for="html">Screen replacement + ৳480</label><br></br>
                <input type="radio" id="html" name="fav_language" value="Full coverage including theft/lost + ৳960"/>
                <label for="html">Full coverage including theft/lost + ৳960</label><br></br>
               <span className='text-xl'>
                <button style={{border: '1px solid black'}}> ➖ </button>
               </span>
               <span className='text-xl' >
               <input className='text-center' value='1'  style={{border: '1px solid black', width: "40px"}} type='text'></input>
               </span>
               <span className='text-xl'>
                <button style={{border: '1px solid black'}}> ➕ </button>
               </span>
               <br/>
               <button className='btn btn-outline'>Add to cart</button>
               <button className='btn btn-primary'>Buy Now</button>
              </div>
           </div>
        </div>
    );
};

export default Purchase;
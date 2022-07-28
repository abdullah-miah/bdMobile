import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const {id}=useParams();
    const [user, loading, error] = useAuthState(auth);
    const [mobile, setMobiles]=useState({});
    useEffect(()=>{
        const url = `http://localhost:5000/purchase/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setMobiles(data))
    },[])
    const handlePurchase =event=>{
        event.preventDefault()
        const quantity = event.target.quantity.value;
        const buyInfo ={
          img: mobile.img,
          productName:mobile.name,
          productId:mobile._id,
          price: mobile.price,
          userName: user.displayName,
          userEmail: user.email,
          quantity
        }
       if(user){
        fetch('http://localhost:5000/order', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(buyInfo)
      })
      .then(res => res.json())
      .then(data =>{
          console.log(data)
          event.target.reset();
          
      })
       }
       
    }
    
    return (
        <div>
            <h1 className='px-36'><span> >> </span>  {mobile.title}</h1>
           <div className='grid gap-1 grid-cols-1 lg:grid-cols-3 px-36 mt-12'>
            
             <div>
             <img src={mobile.img}></img>
             </div>
             <div id='viewCard'>
                <h1 className='text-xl font-bold mb-4'>{mobile.title}</h1>
                <p>{mobile.ratings} | <a className='text-primary' href='#'> Add Review</a></p>
                <p>Brand: {mobile.brand}</p>
                <p className='my-2'>Sold by: <a className='text-primary text-xl' href='#'>{mobile.brand}</a></p>
                <img src={mobile.imgBkash}></img>
                <p className='my-2 text-2xl font-bold text-red-600'>৳{mobile.price}</p>
                <div class="divider"></div> 
                <p>Warranty:<a className='text-primary my-2' href='#'>{mobile.Warranty}</a></p>
                <p className='mt-2'>Color</p>
                <div class="tooltip my-4" data-tip={mobile.color}>
                <img className='w-20 p-4 border-2'  src={mobile.img}></img>
                       </div>
                <p>P-Protect (smartphone's insurance packages for 12 months)-</p>
                <input type="radio" id="html" name="fav_language" value="none"/>
                <label for="html">None</label><br></br>
                <input type="radio" id="html" name="fav_language" value="Screen replacement + ৳480"/>
                <label for="html">Screen replacement + ৳480</label><br></br>
                <input type="radio" id="html" name="fav_language" value="Full coverage including theft/lost + ৳960"/>
                <label for="html">Full coverage including theft/lost + ৳960</label><br></br>
              <form onSubmit={handlePurchase}>
              <div className='my-4'>
              <span className='text-xl'>
                <button style={{border: '1px solid black'}}> ➖ </button>
               </span>
               <span className='text-xl' >
               <input name='quantity' className='text-center' value='1'  style={{border: '1px solid black', width: "40px"}} type='text'></input>
               </span>
               <span className='text-xl'>
                <button style={{border: '1px solid black'}}> ➕ </button>
               </span>
               <br/>
              </div>
              <input  value='Add to Cart' type='submit' className='btn btn-outline mt-4'></input>
              </form>
               
              </div>
              <div className='ml-32'>
                <img className='w-3/4' src={mobile.imgFastTrack}/>
              </div>
           </div>
           <div style={{width: '1170px', margin: '0 auto'}}>
           <div style={{margin:'0 auto', width: '1170px'}} className='border-b-2'>
           <h1 className='text-3xl font-bold mt-12'>Details </h1>
           <div className='border-b-2 border-sky-600 w-40'>

           </div>
           </div>
           <h1>{mobile.title}</h1>
           <p>Specifications:</p>
           <h2></h2>
            <ul id='ul-padding' className='list-disc ml-12'>
                <li>{mobile.description1}</li>
                <li>{mobile.description2}</li>
                <li>{mobile.description3}</li>
                <li>{mobile.description4}</li>
                <li>{mobile.description5}</li>
                <li>{mobile.description6}</li>
                <li>{mobile.description7}</li>
                <li>{mobile.description8}</li>
                <li>{mobile.description9}</li>
                <li>{mobile.description10}</li>
                <li>{mobile.description11}</li>
                <li>{mobile.description12}</li>
                <li>{mobile.description13}</li>
                <li>{mobile.description14}</li>
                <li>{mobile.description15}</li>
            </ul>
           </div>
        </div>
    );
};

export default Purchase;
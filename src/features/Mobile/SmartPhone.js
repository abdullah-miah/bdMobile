import React, { useEffect } from 'react';
import { fetchMobiles } from './moblieSlice';
import { useDispatch, useSelector } from 'react-redux';
import MobileCard from './MobileCard';

const SmartPhone = () => {

    const {mobiles}= useSelector((state)=> state.mobiles)
    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(fetchMobiles()) 
    },[])
    return (
        <div className='mt-12'>
            <div style={{margin: '0 auto'}} className='w-4/5'>
            <img className='smartPhone' src='https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/wysiwyg/cmsp/SmartPhone.jpg'></img>
          </div>
           <div style={{margin:'0 auto'}} className='border-b-2 w-4/5'>
           <h1 className='text-3xl font-bold mt-12'>MOBILE </h1>
           <div className='border-b-2 border-sky-600 w-32'>

           </div>
           </div>
           <div style={{margin: '0 auto'}} className='gap-1 grid grid-cols-1 lg:grid-cols-4 w-4/5'>
          {
            mobiles.slice(8,12).map(mobile=><MobileCard
            key={mobile._id}
            mobile={mobile}
            >

            </MobileCard>)
          }
          </div>

        </div>
    );
};

export default SmartPhone;
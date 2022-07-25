import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MobileCard from './MobileCard';
import { fetchMobiles } from './moblieSlice';

const MobileView = () => {
      const {isLoading, mobiles, error} = useSelector((state)=> state.mobiles)
    const dispatch = useDispatch();

    useEffect(()=>{
    dispatch(fetchMobiles());
    }, [])
    
      return (
        <div className='px-12 mt-12'>
          <div style={{margin: '0 auto'}} className='w-4/5'>
            <a  href='#'><img className='smartPhone' src='https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/wysiwyg/cmsp/Todays-Special.jpg'></img></a>
          </div>
           <div style={{margin:'0 auto'}} className='border-b-2 w-4/5'>
           <h1 className='text-3xl font-bold mt-12'>BEST SELLS </h1>
           <div className='border-b-2 border-sky-600 w-40'>

           </div>
           </div>
          {isLoading && <h1>Loading.....</h1>}
          {error && <h1>{error}</h1>}
          <div style={{margin: '0 auto'}} className='gap-1 grid grid-cols-1 lg:grid-cols-4 w-4/5'>
          {
            mobiles.slice(0,8).map(mobile=><MobileCard
            key={mobile._id}
            mobile={mobile}
            >

            </MobileCard>)
          }
          </div>

        </div>
    );
};

export default MobileView;
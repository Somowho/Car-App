import React from 'react'
import { data } from '../data/data.js';
import { useState } from 'react';




const Cars = () => {

    const [cars, setCars] = useState(data)

    //Filter by category

    const filterType = (category) => {
        setCars(
            data.filter((item) => {
                return item.category === category;
            })
        )
        }
        

  return (
    <div className='bg-white max-w-[1640px] m-auto px-4 py-12'>

    <h1 className='text-black font-bold text-2xl text-center md:text-3xl lg:text-4xl'>Make Payments Here</h1>




  {/*Filter Row */}

  <div className='flex flex-col lg:flex-row justify-between'>
    

    {/*Filter Type */}


        <div>
        <p className='font-bold text-gray-700'>Filter Type</p>
        <div className='flex justify-between flex-wrap'>
            <button onClick={()=> setCars(data)} 
            className='m-1 border-black text-white bg-black p-4 rounded-xl hover:bg-black hover:text-white'>All</button>
           
            <button onClick={()=> filterType('Toyota')} 
            className='m-1 border-black text-white bg-black p-4 rounded-xl hover:bg-black hover:text-white'>Toyota</button>
            
            <button onClick={()=> filterType('Audi')}  
            className='m-1 border-black text-white bg-black p-4 rounded-xl hover:bg-black hover:text-white'>Audi</button>
            
            <button onClick={()=> filterType('Nissan')}  
            className='m-1 border-black text-white bg-black p-4 rounded-xl hover:bg-black hover:text-white'>Nissan</button>
           
            
        </div>
        </div>


</div>









    {/*Display Cars */}
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>

    {cars.map((item, index) =>(

    <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
    <img className='w-full h-[200px] object-cover rounded-t-lg'
    src={item.image} alt={item.name} />
   
   
   
   
        

<div className='flex justify-between px-2 py-4'>
 <p className='font-bold'>{item.name}</p>

<p><span className='bg-black text-white p-1 rounded-full'>{item.price}</span></p>

</div>
   

    </div>


    ))}

</div>

    </div>
  )
}

export default Cars
import React from 'react'
import { BsCash, BsHouse, BsPeople, BsPerson } from 'react-icons/bs'
const Navbar2 = () => {
  return (
    <div className='flex flex-rol -mt-2 justify-center items-center ml-16'>
<button className='mx-1 lg:mx-14 '>
 <BsHouse className='mr-2 bg-transparent text-black hidden md:flex items-center py-2 rounded-full mt-2 ' size={40} /> Home
</button>

<button className='mx-1 lg:mx-14 '>
 <BsPerson className='mr-2 bg-transparent text-black hidden md:flex items-center py-2 rounded-full mt-2' size={40} /> About
</button>

<button className='mx-1 lg:mx-14 '>
 <BsCash className='mr-2 bg-transparent text-black hidden md:flex items-center py-2 rounded-full mt-2 ' size={40} /> Payments
</button>

<button className='mx-1 lg:mx-14 '>
 <BsPeople className='mr-2 bg-transparent text-black hidden md:flex items-center py-2 rounded-full mt-2' size={40} /> Contact
</button>

    </div>
  )
}

export default Navbar2
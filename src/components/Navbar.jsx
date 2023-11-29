import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsCarFront, BsCart} from 'react-icons/bs'
const Navbar = () => {
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>

    {/*Left Side */}
    <div className='flex items-center'>

    <div>
    <BsCarFront size={30}/>
    </div>


    <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>4TUNE <span className='font-bold'>Cars</span></h1>
    </div>




    {/*Search Input */}

    <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>

    <AiOutlineSearch size={25} />
    <input className="bg-transparent p-2 w-full focus:outline-none"  type="text" placeholder="Search Cars" />
    </div>




    <button>
        <BsCart className='mr-2 bg-transparent text-black hidden md:flex items-center py-2 rounded-full mt-2' size={60} />
    
    </button>


    </div>
  )
}

export default Navbar
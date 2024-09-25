import React from 'react'
import { GoPlus } from "react-icons/go";
import { FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeToCart,incrementQty,decrementQty } from '../Redux/Slices/CartSlice';
import toast from 'react-hot-toast';

const ItemCard = ({id,name,qty,price,img}) => {
  const dispatch = useDispatch();
  return (
    <div className='flex gap-2 shadow-md rounded-lg p-2 mb-3'>
        <MdDelete onClick={()=>{dispatch(removeToCart({id,img,name,price,qty}))
        toast(`Removed ${name}`,
        {icon: "👏",}
        )
      }} className='absolute right-7 text-gray-600 cursor-pointer' />
      <img src={img} alt='' className='w-[50px] h-[50px]'/>
    <div className='leading-5'>
         <h2 className='font-bold text-gray-800'>{name}</h2>
         <div className='flex justify-between'>
            <span className='text-green-500 font-bold'>₹ {price}</span>
            <div className='flex justify-center gap-2 items-center absolute right-7'>
            <FaMinus onClick={()=> qty >1 ? dispatch(decrementQty({id})):(qty=0)} className='border-2 border-gray-600 text-gray-600
            hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1
            text-xl transition-all ease-linear cursor-ponter
            '/>
            <span>{qty}</span>
            <GoPlus onClick={()=> qty >=1 ? dispatch(incrementQty({id})):(qty=0)} className='border-2 border-gray-600 text-gray-600
            hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1
            text-xl transition-all ease-linear cursor-ponter'
             />
            </div>
         </div>
    </div>
      
    </div>
  )
}

export default ItemCard

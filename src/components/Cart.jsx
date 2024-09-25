import React, { useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';
import { BsCartCheckFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate()
  const [activeCart , setActiveCart] = useState(false)
  const cartItems = useSelector((state=>state.cart.cart))
  const totalQty = cartItems.reduce((totalQty,item)=>totalQty+item.qty, 0)
  const totalprice = cartItems.reduce((totalprice,item)=>totalprice + item.qty * item.price, 0)

  console.log(cartItems)
  return (
    <>
     <div className={`fixed right-0 p-5 top-0 w-full lg:w-[25vw] h-full bg-white
     mb-3 ${activeCart ? "translate-x-0": "translate-x-full"} transition-all duration-500 z-50
     `}>
        <div className='flex justify-between items-center my-3'>
            <span className='text-xl font-bold text-gray-800'>My Order</span>
            <IoIosCloseCircle onClick={()=>setActiveCart(!activeCart)} className='border-2 border-gray-600 text-gray-600
            font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300
            cursor-pointer' />
        </div>
        {
          
          cartItems.length > 0 ? cartItems.map((food)=>{
            return(
              <ItemCard key={food.id}
              id={food.id}
              name = {food.name}
              price={food.price}
              img= {food.img}
              qty = {food.qty}
              />
            )
          }):<h2 className='text-center text-xl font-bold text-gray-800'>Your Cart Is Empty</h2> 
        }
        <div className='absolute bottom-0'>
          <h3 className='font-semibold text-gray-800'>Toal Items: {totalQty}</h3>  
          <h3 className='font-semibold text-gray-800'>Total Amount :{totalprice}</h3>
          <hr/>
          <button onClick={()=>navigate("/success")} className='bg-green-500 font-bold text-white py-2 px-3 mb-5 rounded-lg w-[90vw] lg:w-[23vw]'>CheckOut</button>
        </div>   
    </div>
    <BsCartCheckFill onClick={()=>setActiveCart(!activeCart)} className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-10 right-4
    ${totalQty > 0 && "animate-bounce delay-500 trasition-all"}
    `} /> 
    </>
    
  )
}

export default Cart

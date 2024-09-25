import React, { useEffect, useState } from 'react'
import { ScaleLoader } from 'react-spinners'

const Success = () => {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      {
        loading ?(<ScaleLoader color="#36d7b7" />):
        (<di><h2 className='text-3xl font-semibold mb-4'>Order Successful!!</h2>
        <p>Your order has been sucessfully placed..</p></di>)
      }
    
      
    </div>
  )
}

export default Success

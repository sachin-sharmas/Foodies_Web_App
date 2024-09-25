import React, { useEffect, useState } from 'react'
import FoodData from '../Data/FoodData'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../Redux/Slices/CategorySlice'

const CategoryMenu = () => {
const [categories, setcategories] = useState([])
const dispatch = useDispatch()
const selectedCategory = useSelector((state)=>state.category.category)

const listuniqueCategory = () =>{
  const uniqueCategory = [
    ...new Set(FoodData.map((food)=>food.category))
  ]
  setcategories(uniqueCategory)
  console.log(uniqueCategory)
}

useEffect(()=>{
  listuniqueCategory()
},[])

  return (
    <div className='mx-6'>
      <h1 className='text-xl font-semibold'>Find The Best Food</h1>
      <div className='my-5 flex gap-20 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
      <button onClick={()=>dispatch(setCategory("All"))} className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500
               hover:text-white ${selectedCategory === "All" && "bg-green-500 text-white"}`}>
               All
              </button>
      
        {
          categories.map((category,index)=>{
            return(
              <button onClick={()=>dispatch(setCategory(category))}  key={index}  className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500
              hover:text-white ${selectedCategory === category && "bg-green-500 text-white"}`}>
               {category}
              </button>
            )
          })
        }
      </div>
    </div>
  )
}

export default CategoryMenu

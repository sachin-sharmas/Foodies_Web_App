import React from 'react'
import Navbar from './Navbar'
import CategoryMenu from './CategoryMenu'
import FoodItem from './FoodItem'
import Cart from './Cart'

const Home = () => {
  return (
    <div>
      <Navbar />
      <CategoryMenu />
      <FoodItem />
      <Cart />
    </div>
  )
}

export default Home

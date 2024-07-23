import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Product from './Components/Products/Product'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Product />
      <Analytics />
    </div>
  )
}

export default App

import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Analytics />
    </div>
  )
}

export default App

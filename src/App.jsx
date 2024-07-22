import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Analytics />
    </div>
  )
}

export default App

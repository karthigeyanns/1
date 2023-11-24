import React from 'react'

import Home from '.src/components/Home'
import NavBar from './NavBar'
import Singers from './src/components/Singers'
import { Routes,Route } from 'react-router-dom'
import Albums from './src/components/Albums'

export default function App() {
  return (
   
    <div>
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sing' element={<Singers/>}/>
          <Route path='/alb' element={<Albums/>}/>
        </Routes>
    </div>
 
  )
}
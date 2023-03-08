import React from 'react'
import './App.css'
import Home from './components/Home'
import Aboutme from './components/Aboutme'
import { VariosProvider } from './context/VariosProvider'
import Works from './components/Works'
import Certificates from './components/Certificates'
import Contact from './components/Contact'

const App = () => {
  return (
    <VariosProvider>
      <div>
        <Home />
        <Aboutme />
        <Works />
        <Certificates />
        <Contact />
      </div>
    </VariosProvider>
  )
}

export default App

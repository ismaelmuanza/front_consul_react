import React from 'react'
import Header from './components/Header/Header'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Separator from './components/Separator/Separator'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Separator />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

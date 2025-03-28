import { useState } from 'react'
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage/HomePage'
import PageTwo from './pages/PageTwo/PageTwo'

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/pagetwo' element={<PageTwo />} />
          <Route path='/series' element={<HomePage />} />
          <Route path='/movies' element={<HomePage />} />
          <Route path='/hbo' element={<HomePage />} />
          <Route path='/sports' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


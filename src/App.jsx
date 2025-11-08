import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <section className='lg:px-20 px-2 md:px-6'>
        <Header/>
        <Outlet/>
        <Footer/>
      </section>
    </>
  )
}

export default App;
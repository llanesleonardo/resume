import React from 'react'
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

export default function FOFPage() {
  return (
    <div className='h-screen'>
      <Header/>
      <div className=' h-screen full-container flex flex-row justify-center items-center text-white'>
         <div className='text-3xl'>Page not found</div>
      </div>
      <Footer />
    </div>
  )
}

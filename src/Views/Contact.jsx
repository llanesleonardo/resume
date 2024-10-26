import React from 'react'
import Header from '../Components/Header/Header'
import Footer from "../Components/Footer/Footer";

export default function Contact() {
  return (
    <div className='h-screen'>
    <Header />
    <div className="container mx-auto flex flex-row flex-wrap items-start justify-center">
    <div className=" mx-auto flex flex-row flex-wrap justify-center items-start h-1/2 w-3/4  pt-10 md:justify-center lg:justify-center lg:items-start  lg:h-auto lg:py-10  lg:w-1/2">

            <div  className="w-full md:w-3/4 lg:w-3/4 pt-16">
                <h1 className=" text-white text-4xl md:text-6x1 lg:text-4xl text-center mb-5"> Contact</h1>
                <div  className="w-full py-5 px-5 bg-white rounded">
                    <ul>
                      <li className='my-5'>
                        <p>Email: llanesleonardo.developer@gmail.com</p>
                      </li>
                      <li className='my-5'>
                        <p>GitHub: llanesleonardo </p>
                      </li>
                      <li className='my-5'>
                        <p>Insta: 3lstrategy </p>
                      </li>
                      <li className='my-5'>
                        <p>LinkedIn: 3lstrategy </p>
                      </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
        <Footer/>
 </div>
  )
}

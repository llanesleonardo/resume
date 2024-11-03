import React from 'react'

export default function Hero() {
  return (
    <div className=''>
        <div className='flex flex-col justify-center items-center h-auto bg-black w-screen border-b-8 border-blue-800'>
           <div className='relative'>
           <img   className='opacity-70' src='https://resumev1sa.blob.core.windows.net/treseledata/treseleweb/img/sliders/world.jpg' />
            <div className='absolute w-screen bottom-52 text-center'>
            <h1 className='text-8xl text-white py-5 '>Do it now!</h1>
            <p className='text-white  text-4xl pb-5'>Take your entrepreneurship to another level.</p>    
            </div>    
         </div>
        </div>
    </div>
  )
}

import React from 'react'
import { ReactTyped } from 'react-typed'

const Hero = () => {
    const handleClick = () => {
        window.location.href = "https://google.com"; // Redirect to Google
      };
    
  return (
    <div className='text-black'>
      <div className='max-w-[800px] mt-[-90px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#6956E5] font-bold p-2'>HEALTH | EDUCATION | BANKING</p>
        <h1 className='md:text-5xl sm:text-4xl text-4xl font-bold md:py-2'>Transform Your Documents into Insights</h1>
        <div className='flex justify-center items-center'>
            <p className='md:text-3xl sm:text-2xl text-xl font-bold py-4'>Fast, flexible review for</p>
            <ReactTyped className='md:text-3xl sm:text-2xl text-xl font-bold md:pl-4 pl-2'
            strings={['Invoices', 'Contracts', 'Resumes', 'many others']} 
            typeSpeed={120} 
            backSpeed={140} 
            loop   
            />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Extract data, diagnose easily and hire talents with filtext</p>
        <button className='bg-[#6956E5] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white' onClick={handleClick}>Get Started</button>
      </div>
    </div>
  )
}

export default Hero

import React from 'react'
import HompagePic from "../assets/images/Homepage Picture.jpg"

export default function Homepage() {

  let width = window.screen.width;
  
  if (width >= 871){
    return (
      <div className='lg:h-screen md:h-screen'>
          <img id='img-home' src={HompagePic} className='object-cover absolute grayscale brightness-50 lg:w-screen lg:max-h-screen'/>
          <div className='p-10 grid grid-rows-5 relative text-white h-screen'>
              <p className=' uppercase text-center block lg:tracking-[3em] md:tracking-[1em]  text-xs' id='body'>The brand new coffee shop</p>
              <h1 className='row-span-3 uppercase text-center lg:text-[12rem] text-[#d4a276] md:text-9xl md:flex md:items-center md:justify-center' id='main'>Deliciao</h1>
              <div className="flex flex-col items-center">
                  <h5 className='uppercase text-center lg:text-xl' id='body'>Welcome to our enchanting world of coffee <br />delights! Unleash your senses and let the magic of  <br /> coffee aroma hypnotize you</h5>
                  <button id='btn' className='bg-black my-1 px-6 py-2 text-white rounded-xl uppercase bg-[#b67a31]'>Discover More</button>
              </div>
          </div>
      </div>
    )
  } else {
    return(
      <div className="flex flex-col justify-center items-center">
        <p id='body' className='uppercase text-center m-5 tracking-widest text-xs'>The brand new coffee shop</p>
        <h1 className='uppercase text-center text-white text-7xl' id='main'>Deliciao</h1>
        <h5 className='uppercase text-center text-xl font-bold my-10' id='body'>Welcome to our enchanting world of coffee delights! Unleash your senses and let the magic of coffee aroma hypnotize you</h5>
        <button id='btn' className='bg-black my-1 py-2 max-w-max px-6 text-white rounded-xl uppercase bg-[#b67a31]'>Discover More</button>
      </div>
    )
  }
}

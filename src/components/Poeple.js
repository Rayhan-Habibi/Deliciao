import React from 'react'
import sophie from "../assets/images/sophie.jpg"
import max from "../assets/images/max.jpg"
import luna from "../assets/images/luna.jpg"

function BaristaPics(prop){
    return(
        <div className="lg:m-10 md:m-10 flex flex-col justify-center items-center duration-150 hover:scale-150">
            <img className='rounded-full lg:w-28 lg:h-28 md:w-28 md:h-28 w-20 h-20 grayscale object-cover' src={prop.image} alt="" />
            <p id='main' className='mt-4'>{prop.name}</p>
            <p id='body' className='text-sm'>{prop.desc}</p>
        </div>
    )
}

export default function Poeple() {
  return (
    <div className='flex justify-around'>
      <BaristaPics name="SOPHIE" desc="Bean Whisperer" image={sophie}/>
      <BaristaPics name="MAX" desc="Foam Master" image={max}/>
      <BaristaPics name="RYAN" desc="Latte Artist" image={luna}/>
    </div>
  )
}

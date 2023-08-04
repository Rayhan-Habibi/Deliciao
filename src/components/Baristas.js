import React, { useEffect, useRef } from 'react'
import { Icon } from '@iconify/react'
import { gsap } from 'gsap/src';
import { ScrollTrigger } from 'gsap/all';

export default function Baristas() {

  const fadeEffect = useRef(null);
  
  useEffect(()=>{
    const el = fadeEffect.current
    gsap.fromTo(el, {
    opacity : "10%",
    y: "-10%"
    }, {
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom",
        toggleActions: "restart"
      },
      delay: 0.3,
      opacity: "100%",
      y: 0,
    })
  }, [])
  return (
    <div  className='flex h-screen flex-col'>
        <div ref={fadeEffect} className="m-auto">
            <h1 id='main' className='text-6xl text-[#583101]' >World-Class Baristas</h1>
            <p className='w-3/6 mt-8'>Meet our extraordinary team of coffee maestros, ready to craft your next beverage masterpiece. Passionate, skilled, and always with a smile—our baristas know their beans and how to make them sing.</p>
            <div className="flex gap-4 mt-8">
                <Icon icon="mdi:twitter" width="32" height="32" />
                <Icon icon="ri:instagram-fill" width="32" height="32"/>
                <Icon icon="ic:baseline-facebook" width="32" height="32"/>
                <Icon icon="ri:whatsapp-fill" width="32" height="32" />
            </div>
        </div>

    </div>
  )
}

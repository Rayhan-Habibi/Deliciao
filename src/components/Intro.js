import React from 'react'
import introImage1 from "../assets/images/intro1 (1).jpg"
import introImage2 from "../assets/images/intro2.jpg"

function IntroData(prop) {

  let width = window.screen.width;
  let widthTrue = width == 871

  return (
      <div className={`lg:flex lg:justify-between md:flex md:justify-between mt-20`}>
        <div className={`flex flex-col justify-center my-5 lg:my-0 md:ml-5 ${widthTrue? prop.descClass : ""}`}>
            <h1 id='main' className='text-4xl w-96'>{prop.heading}</h1>
            <br />
            <p id='body' className='lg:w-96'>{prop.desc}</p>
        </div>
        <img src={prop.image} className={`w-96 rounded-2xl sepia ${prop.className}`} alt="" />
      </div>
  )
}

const introDataJson = [
    {
        heading: "Sip, Savor, and Soar: Discover Our Coffee",
        desc: "Hop aboard our coffee and embark on a flavor adventure like no other. Explore a mesmerizing world of taste one cup at a time.",
        image: introImage1,
        className: "",
        descClass:"",
    },
    {
        heading: "Cozy Up with Our Inviting Ambiance",
        desc: "Pull up a chair, sink into our plush cushions, and let the warmth of our coffee shop embrace you. We've curated the perfect atmosphere for intimate chatter and inspired thoughts.",
        image: introImage2,
        className: "order-first",
        descClass: "ml-5",
    },
]

export default function Intro() {
  return (
    <div className=''>
      {introDataJson.map((data) =>
        <IntroData heading={data.heading} desc={data.desc} image={data.image} className={data.className} descClass={data.descClass}/>
      )}
    </div>
  )
}


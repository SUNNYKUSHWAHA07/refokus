import React from 'react'
import Marquee from './Marquee'
import { motion } from 'framer-motion'

const Marquees = () => {

    const data = [
      ["Creative Strategy","Branding & Art Direction","Web Design","Creative Development","2D/3D Animations","Webflow Development","AI Strategy & Integration",],
    ["Creative Strategy","Branding & Art Direction","Web Design","Creative Development","2D/3D Animations","Webflow Development","AI Strategy & Integration",],
    ]
  return (
    <>
    <div  className='flex flex-col '>
      {data.map((item,index)=> <Marquee key={index} direction={ index=== 0?"left":"right"} data={item} />)}
    </div>
   
   
    </>
  )
}

export default Marquees
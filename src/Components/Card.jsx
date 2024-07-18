import { motion } from 'framer-motion';
import React from 'react'
import { GoArrowRight } from "react-icons/go";

const Card = ({width,start,para,hover="false"}) => {
  return (
    
    <motion.div whileHover={{backgroundColor:hover === true && "#7443ff", padding:"20px"}} className={`${width} text-white   rounded-lg px-5 bg-zinc-800  flex flex-col justify-between items-start h-96`}>
        <div className='w-full '>
            <div className='w-full flex items-center justify-between p-2'>
                <h1>one heading</h1>
                <GoArrowRight />
            </div>
            <h1 className='p-2 text-3xl mb-44'>whatever heading.</h1>
        </div>
        {
          start && (
         <>
            <h1 className='text-4xl mb-3'>Start a project</h1>
          <button className='px-4 py-2 mb-3 border rounded-full'>Contact Us</button>
         </>
          )
        }
     
     {para && (
       <p className='text-sm pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
     )}
    </motion.div>
  )
}

export default Card
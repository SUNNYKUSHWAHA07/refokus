import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { data } from 'autoprefixer'

const Work = () => {
 
  const [images , setImages] = useState( [
    {url: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b413200259aa2289224594_Frame%204-p-500.png', top:"30%", left: "50%", isActive: false},
    {url: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/65f112dec7a59534cca51a3d_portfolioCard_cc-01-p-500.webp', top: "45%", left: "55%", isActive: false},
    {url: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cd6ec7666ac6009cfcb7db_11-p-500.jpg', top: "50%", left: "50%", isActive: false},
    {url: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b415e16156819899272250_Frame%202-p-500.png', top: "60%", left: "45%", isActive: false},
    {url: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cc29f414c45ee4f46aa3ba_01-p-500.jpg', top: "70%", left: "40%", isActive: false},
    {url: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f12d26da475b2fd6b88_15-p-500.webp', top: "80%", left: "50%", isActive: false},
    {url: 'https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cc29f66c6594c072ba1a38_02.jpg', top: "90%", left: "55%", isActive: false},


]
)
    
    const { scrollYProgress } = useScroll()

    scrollYProgress.on('change', (data)=>{
      function imagesShow(arr){
        setImages(prev=>(
          prev.map((item,index)=>(
            arr.indexOf(index) === -1 ? {...item, isActive: false} : {...item, isActive: true}
          ))
        ))
      }

      switch(Math.floor(data*100)){
        case 0: imagesShow([])
         break;
           case 1: imagesShow([0])
         break; 
          case 2: imagesShow([0,1])
         break; 
          case 3: imagesShow([0,1,2])
         break; 
          case 5: imagesShow([0,1,2,3])
         break; 
          case 6: imagesShow([0,1,2,3,4])
         break;
         case 8: imagesShow([0,1,2,3,4,5])
         break;
      }
    })
  





   
    

  return (
    <div className='w-full '>
        <div className='relative max-w-screen-lg  mx-auto text-center mt-20'>
            <h1 className='text-[26vw] text-white leading-none font-light tracking-tight select-none'>Work</h1>
            <div className='h-full w-full absolute top-0 '>
                {images.map((elem,index)=>
                  elem.isActive &&(
                    <img key={index} className='w-60 absolute -translate-x-1/2 -translate-y-1/2 rounded-lg' style={{top: elem.top , left:elem.left}} src={elem.url} alt="" />
                )
                )}
            </div>
        </div>
    </div>
  )
}

export default Work
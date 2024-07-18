import React from 'react'
import Button from './Button'

const Product = ({val ,mover,count}) => {
  return (
   <div className='w-full  py-20  h-[23rem] '>
     <div onMouseEnter={()=>{mover(count)}} className='max-w-screen-lg mx-auto  flex capitalize justify-between items-center '>
        <h1 className='text-5xl text-white font-medium'>{val.title}</h1>
        <div className=' w-1/3 dets flex flex-col'>
            <p className='leading-none pb-4 text-white'>{val.description}</p>
            <div className='flex gap-3'>
            {val.live && <Button/>}
            {val.case && <Button title='Case Study' />}
            <img src="" alt="" />
            </div>
            
        </div>
    </div>
   </div>

  )
}

export default Product
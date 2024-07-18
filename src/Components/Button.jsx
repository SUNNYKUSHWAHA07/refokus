import React from 'react'
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md"

const Button = ({title ="Get started"}) => {
  return (
    <div className='w-40 py-2  px-4 bg-zinc-100 rounded-full font-thin flex items-center justify-between'>
        <span className='text-sm font-regular'>{title}</span>
        <MdOutlineSubdirectoryArrowRight className='ml-2' />
    </div>
  )
}

export default Button 
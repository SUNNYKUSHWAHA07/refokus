import React from 'react'
import Button from './Button'


const Navbar = () => {
  return (
    <div className='max-w-screen-lg  mx-auto py-6 flex gap-32 justify-between border-b border-zinc-700'>
        <div className='itmes-center flex'>
        <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
        <div className='links flex gap-14'>
         {["Home","Work","Culture","","News"].map((elem,index)=>(
              elem.length === 0 ? <span key={index} className='w-1 h-9 bg-zinc-700'></span>:
            <a href="#" key={index} className='flex items-center gap-2 text-white font-medium'>
                {index === 1 && <span key={index}  style={{boxShadow:"0 0 0.45em"}} className='inline-block w-2 h-2 bg-green-500 rounded-full'></span>}    
                {elem}
                
           
            </a>
         ))}
        </div>
        </div>

      <div className='nleft'>
        <Button/>
      </div>
      
    </div>
   
  )
}

export default Navbar
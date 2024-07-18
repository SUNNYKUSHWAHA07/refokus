import React from 'react'

const Footer = () => {
  return (
    <div className='w-full text-white px-64 flex gap-10 items-center mt-10' >
        <h1 className='text-[7rem]'>refokus.</h1>
    <div>
        <h1 className='text-zinc-500 text-xl mb-2'>socials</h1>
          <div className='flex flex-col text-zinc-700'>
           
            {["instagram", "Twitter(X?)", "Linkedin"].map((item,index) =>  <a href="" key={index}>{item}</a> )}
          </div>
    </div>

    <div>
        <h1 className='text-zinc-500 mb-2 text-xl'>socails</h1>
          <div className='flex flex-col text-zinc-700'>
          {["instagram", "Twitter(X?)", "Linkedin"].map( (item,index) =>  <a href="" key={index}>{item}</a> )}

          </div>
    </div>

    <div className='flex flex-col items-end gap-3'><p className='leading-none text-end'>Lorem ipsum sit amet consectetur adipisicing elit. Eveniet maxime numquam quisquam suscipit.</p>
    <img className='h-11' src="https://imgs.search.brave.com/LJQa08BM3fGJX11wiD3q922bK1vt_5Kz0bwNbf4kgtE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtZ2xvYmFsLndl/YnNpdGUtZmlsZXMu/Y29tLzVlNWZlZGI2/OTM4YjEzMDQ1OGYw/YjM3MS82NTMxMzY4/MWY0YzZhYjY2ZDg1/NzlkZjdfV2hhdF9p/c19XZWJmbG93Xy0y/LnBuZw" alt="" /></div>
    </div>
  )
}

export default Footer
import React from 'react'

const Stripe = ({val}) => {
 
  return (
    <div className='w-[23%] border-t-2 border-b-2 border-r-2 border-zinc-800 p-3 text-white flex justify-between'>
      <img  src={val.url} alt="" />
      <h1 className='text-xl'>{val.Number}</h1>
    </div>
  )
}

export default Stripe
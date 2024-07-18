import React from 'react'
import Card from './Card'


const Cards = () => {
  return (
    <div className='max-w-screen-lg mx-auto  flex gap-5 justify-between overflow-hidden rounded-xl'>
        <Card width={"basis-1/3"} start={false} para={true} />
        <Card width={"basis-2/3"} start={true} para={false} hover={true} />
    </div>
  )
}

export default Cards
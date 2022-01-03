import React from 'react'

function Card({characterObj}) {

  return (
    <div className="border-2 rounded-md p-2">
      <img src={characterObj.image} alt={characterObj} className='mb-2 w-full' />
      <div className='text-orange-300'>
        <h5 className='font-bold text-orange-500'>{characterObj.name}</h5>
        <p className=''>{characterObj.status} - {characterObj.species}</p>
        <h6 className='mt-2'>Last known Location: {characterObj.location.name}</h6>
      </div>
    </div>
  )
}

export default Card

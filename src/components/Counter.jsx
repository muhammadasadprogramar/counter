import React from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {
  const counter = useSelector(store => store.counter) 
  return (
    <div className='border-[2px] w-full border-teal-500 mt-5 py-2 rounded-lg'>
      <h1 className='text-3xl text-center font-medium'>{counter}</h1>
    </div>
  )
}

export default Counter
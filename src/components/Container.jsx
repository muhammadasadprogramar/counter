import React from 'react'


const Container = ({children}) => {
  return (
    <div className='cont px-5 py-7 flex items-center flex-col justify-center border-[2px] rounded-2xl border-teal-500 main bg-slate-100'>
      {children}
    </div>
  )
}

export default Container
import React from 'react'
import logo from "../images/As.png"

const LoggedIn = ({onSelect}:{onSelect:()=>void}) => {
  return (
    <div className='text-white mt-12 bg-black/40 p-6 md:w-1/3 mx-auto rounded-lg backdrop-blur flex items-center justify-center flex-col gap-12'>
      <div>
      <img src={logo} className="w-32" alt="Logo" />
    </div>

        <h4 className='md:text-2xl'>Submit form below then start the game </h4>
        <a className='underline hover:no-underline' href="https://docs.google.com/forms/d/e/1FAIpQLSdMYsY7EfgpoXlI_tHImXiNm_0v1GFHywAVM-dkP5-1Q26Ftg/viewform?vc=0&c=0&w=1&flr=0" target='_blank'>Enter Data</a>
      <div className='w-full mx-auto text-center'>
        <button onClick={onSelect} className='px-4 py-2 border-transparent bg-slate-800 text-white rounded-3xl w-1/2  hover:bg-white hover:text-black transition-all duration-300'>Start Game</button>
      </div>
    </div>
  )
}

export default LoggedIn
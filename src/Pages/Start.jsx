// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

function Start() {
  return (
    <div >
      <div className='bg-gradient-to-r from-blue-500 to-teal-500'>
      
<h1 className=' rounded-full text-6xl font-bold text-center bg-gradient-to-br from-blue-900 to-black text-transparent bg-clip-text h-24 flex items-center justify-center backdrop-blur-sm'>WELCOME TO MY GAME</h1>

<h1 className='text-7xl mt-24 mb-4 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-purple-900 animate-bounce shadow-[0_4px_12px] shadow-blue-500/60 font-Roboto'>
SUICIDE ESCAPE
          </h1>
        <div className='bg-slate-900 h-screen flex items-center justify-center'>
          
          
            <button className='bg-gradient-to-r from-purple-900 to-blue-900 text-white font-bold py-2 px-4 rounded-3xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-blue-700/50'>
              <Link to="/select" className="text-3xl font-extrabold">Start Game</Link>
            </button>
            
            
        </div>
    
    </div>
    </div>
  )
}

export default Start
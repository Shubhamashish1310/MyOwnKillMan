// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

function Start() {
  return (
    <div className='bg-black'>
<h1 className=' text-6xl font-bold text-center bg-gradient-to-br from-blue-500 to-purple-500 text-transparent bg-clip-text h-24 flex items-center justify-center backdrop-blur-sm'>WELCOME TO MY GAME</h1>


        <div className='bg-slate-900 h-screen flex items-center justify-center'>
            <button className='bg-gradient-to-r from-purple-900 to-blue-900 text-white font-bold py-2 px-4 rounded-3xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-blue-700/50'>
              <Link to="/select" className="text-3xl font-extrabold">Start Game</Link>
            </button>
            
            
        </div>
    
    </div>
  )
}

export default Start
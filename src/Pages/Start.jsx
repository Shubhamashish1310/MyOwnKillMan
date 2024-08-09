// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

function Start() {
  return (
    <div >
      <div className='bg-gradient-to-r from-blue-500 to-teal-500'>
      
      <div className="relative h-screen w-full bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-black to-gray-900 opacity-80"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-7xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-8 animate-pulse">
          WELCOME TO
        </h1>
        <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500 animate-pulse mb-12">
          SUICIDE ESCAPE
        </h1>
        <button className='px-10 py-5 bg-gradient-to-r from-red-800 to-purple-800 text-white font-bold text-2xl rounded-full shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-xl'>
              <Link to="/select" className="text-3xl font-extrabold">Start Game</Link>
            </button>


      </div>


      <footer className="text-center fixed  bottom-0 w-full h-16 flex items-center justify-center bg-black">
        <p className="text-center text-white font-serif">Made with ❤️ by Shubham Ashish</p>
      </footer>
      </div>
        
          
          
        
            
            
        
    
    </div>
    </div>
  )
}

export default Start




{/* <div className="relative h-screen w-full bg-black overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-black to-gray-900 opacity-80"></div>
<div className="relative flex flex-col items-center justify-center h-full text-center">
  <h1 className="text-7xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-8 animate-pulse">
    WELCOME TO
  </h1>
  <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500 animate-pulse mb-12">
    SUICIDE ESCAPE
  </h1> */}
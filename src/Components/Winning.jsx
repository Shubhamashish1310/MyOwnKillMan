import { Link } from "react-router-dom";

const Winning = ({ wordToGuess }) => {
  return (
    <div className="absolute top-0 right-0 flex flex-col items-center justify-center w-full h-full bg-black opacity-90">
      <div className="text-center bg-slate-900 text-white font-bold py-2 px-4 rounded-3xl opacity-100 bg-opacity-100">
      <h1 className="text-5xl mb-4 font-bold text-cyan-500 font-serif opacity-100">YOU GOT IT!</h1>
      <p className="text-xl">The word was: {wordToGuess}</p>
      <button className='bg-gradient-to-r from-red-700 to-red-500 h-16 w-auto  m-2 p-2 text-white font-bold py-2 px-4 rounded-3xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-red-700/50 '><Link to={"/select"}>Start Again</Link></button>

      </div>
    
      
    </div>
  );
};

export default Winning;

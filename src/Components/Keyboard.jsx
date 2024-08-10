/* eslint-disable no-unused-vars */

import React from 'react';

const RenderKeyboard = ({ alphabet, guessedLetters, handleLetterClick, wrongGuesses, hasWon , wordToGuess }) => {
  return alphabet.map((letter, index) => (
   console.log(wordToGuess[0]),
    <button
      key={index}
      onClick={() => handleLetterClick(letter)}
    
      className={`text-3xl h-9 w-auto  m-1 p-1 border border-black flex justify-center items-center rounded
        ${wordToGuess[0] === letter ? 'bg-green-700 font-bold hover:bg-green-800' : 'bg-cyan-400'}
        ${`${guessedLetters.includes(letter) ? 
          'bg-green-700' : hasWon && !wordToGuess.includes(letter) ? 'bg-red-600 line-through ease-linear' : 'bg-cyan-400 hover:bg-cyan-500 border-cyan-200 border-1 ' }`
      }`}
      
      
      disabled={guessedLetters.includes(letter) || wrongGuesses >= 7 || guessedLetters.includes(letter.toUpperCase())}
    >
      {letter}


      {}
    </button>
  ));
};

export default RenderKeyboard;

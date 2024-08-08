// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import hangman0 from '../assets/1.svg';
import hangman1 from '../assets/2.svg';
import hangman2 from '../assets/3.svg';
import hangman3 from '../assets/4.svg';
import hangman4 from '../assets/5.svg';
import hangman5 from '../assets/6.svg';
import hangman6 from '../assets/7.svg';
import hangman7 from '../assets/8.svg';
import gameover from '../assets/react.svg';

import RenderKeyboard from '../Components/Keyboard';

import Winning from '../Components/Winning';

const hangmanImages = [hangman0, hangman1, hangman2, hangman3, hangman4, hangman5, hangman6, hangman7, gameover];

function Play() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const location = useLocation();
  const { selectedTopic, wordToGuess } = location.state || { selectedTopic: 'default', wordToGuess: 'default' };
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [hasWon, setHasWon] = useState(false); // Track if the user has won
 

  const handleLetterClick = (letter) => {
    if (hasWon) return;

    if (guessedLetters.includes(letter) || wrongGuesses >= 8 || hasWon) return;

    if (wordToGuess.toUpperCase().includes(letter)) {
      const updatedGuessedLetters = [...guessedLetters, letter];
      setGuessedLetters(updatedGuessedLetters);
      // Check if all letters have been guessed
      const allLettersGuessed = wordToGuess
        .split('')
        .every((letter) => updatedGuessedLetters.includes(letter.toUpperCase()));
      if (allLettersGuessed) {
        // You win
        
        setHasWon(true);
       console.log('You win!');
      
      }
    } else {
       
      setWrongGuesses(wrongGuesses + 1);
    }
  };

  const renderWord = () => {
    return wordToGuess.split('').map((letter, index) => (
      <span key={index} className="text-4xl">
        {guessedLetters.includes(letter.toUpperCase()) ? letter : ' _ '}
      </span>
    ));
  };

  const renderGameOver = () => {
    return (
      <div className="text-center text-red-600 mt-8">
        <h2 className="text-3xl">Game Over!</h2>
        <p className="text-xl">The word was: {wordToGuess}</p>
      </div>
    );
  };

  return (
    <div className="bg-slate-900 h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl text-red-500">Hint: {selectedTopic.toUpperCase()}</h1>
      <h2 className="text-3xl mb-4">Guess the word:</h2>
      <div className="mb-8">{renderWord()}</div>
      <div className="flex max-w-3xl flex-wrap justify-center">
        <RenderKeyboard
          alphabet={alphabet}
          guessedLetters={guessedLetters}
          handleLetterClick={handleLetterClick}
          wrongGuesses={wrongGuesses}
          hasWon={hasWon} // Pass hasWon as a prop
          wordToGuess={wordToGuess}
        />
      </div>
      <div className="mt-4">Wrong guesses: {wrongGuesses}/8</div>
      <button className='bg-gradient-to-r from-red-700 to-red-500 h-16 w-auto  m-2 p-2 text-white font-bold py-2 px-4 rounded-3xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-red-700/50 '><Link to={"/select"}>Start Again</Link></button>
      <img src={hangmanImages[wrongGuesses]} alt={`Hangman stage ${wrongGuesses}`} className="mt-4" />
      {wrongGuesses >= 8 && renderGameOver()}
      
    </div>
    
  );
}

export default Play;

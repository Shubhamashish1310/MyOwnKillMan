import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import hangman0 from '../assets/1.svg';
import hangman1 from '../assets/2.svg';
import hangman2 from '../assets/3.svg';
import hangman3 from '../assets/4.svg';
import hangman4 from '../assets/5.svg';
import hangman5 from '../assets/6.svg';

import hangman6 from '../assets/7.svg';
import gameover from '../assets/react.svg';
import RenderKeyboard from '../Components/Keyboard';
import Winning from '../Components/Winning';

const hangmanImages = [
  hangman0, hangman1, hangman2, hangman3, hangman4, hangman5, hangman6, gameover,
];

function Play() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const location = useLocation();
  const { selectedTopic, wordToGuess } = location.state || { selectedTopic: 'default', wordToGuess: 'default' };
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [hasWon, setHasWon] = useState(false);

  const handleLetterClick = (letter) => {
    if (hasWon || wrongGuesses >= 7) return;
    
    if (guessedLetters.includes(letter)) return;

    if (wordToGuess.toUpperCase().includes(letter)) {
      const updatedGuessedLetters = [...guessedLetters, letter];
      setGuessedLetters(updatedGuessedLetters);

      const allLettersGuessed = wordToGuess
        .split('')
        .every((letter) => updatedGuessedLetters.includes(letter.toUpperCase()));

      if (allLettersGuessed) {
        setHasWon(true);
      }
    } else {
      setWrongGuesses(wrongGuesses + 1);
      if (wrongGuesses >= 7) {
        setHasWon(false);
      }
    }
  };

  const renderWord = () => {
    return wordToGuess.split('').map((letter, index) => (
      <span
        key={index}
        className={`text-3xl sm:text-3xl md:text-5xl font-mono font-semibold tracking-widest transition-all duration-300 ${
          guessedLetters.includes(letter.toUpperCase()) ? 'text-green-600' : 'text-gray-500'
        }`}
      >
        {guessedLetters.includes(letter.toUpperCase()) ? letter : ' _ '}
      </span>
    ));
  };

  const renderGameOver = () => {
    return (
      <div className="text-center mb-4">
        <h2 className="text-5xl font-bold text-red-600 mb-2">Game Over!</h2>
        <p className="text-3xl text-lime-500">The word was: {wordToGuess}</p>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-r from-slate-900 via-black to-slate-900 h-screen flex flex-col items-center justify-center text-white p-6">
      <div className="max-w-3xl w-full flex flex-col items-center space-y-6 bg-gray-800 bg-opacity-75 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl sm:text-3xl text-red-400 mb-0 text-center">Hint: {selectedTopic.toUpperCase()}</h1>
        <h2 className="text-3xl sm:text-3xl font-bold mb-4 text-center">Guess the word:</h2>
        <div className="mb-2 flex justify-center space-x-2">{renderWord()}</div>
        <img
          src={hangmanImages[wrongGuesses]}
          alt={`Hangman stage ${wrongGuesses}`}
          className="mb-4 w-32 sm:w-72 md:w-72 lg:w-72"
        />
        <div className="flex flex-wrap justify-center mb-4 w-full">
          <RenderKeyboard
            alphabet={alphabet}
            guessedLetters={guessedLetters}
            handleLetterClick={handleLetterClick}
            wrongGuesses={wrongGuesses}
            hasWon={hasWon}
            wordToGuess={wordToGuess}
          />
        </div>
        
        <div className="mb-4 text-xl font-semibold">
          Wrong guesses: <span className="text-red-500">{wrongGuesses}</span>/7
        </div>
        <Link to="/select">
            <button className="bg-gradient-to-r from-red-600 to-red-400 py-3 px-8 text-white font-bold text-2xl rounded-full transition transform hover:scale-105 hover:shadow-lg">
              Start Again
            </button>
          </Link>
        <div className="flex flex-col items-center space-y-2">
          {wrongGuesses >= 7 && renderGameOver()}
          {hasWon && <Winning wordToGuess={wordToGuess} />}
          
        </div>
      </div>
    </div>
  );
}

export default Play;

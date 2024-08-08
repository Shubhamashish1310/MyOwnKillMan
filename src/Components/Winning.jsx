const Winning = ({ wordToGuess }) => {
  return (
    <div className="absolute top-0 right-0 flex flex-col items-center justify-center w-full h-full bg-green-900 text-white">
      <h1 className="text-6xl mb-4">You did it!</h1>
      <p className="text-2xl">The word was: {wordToGuess}</p>
      
    </div>
  );
};

export default Winning;
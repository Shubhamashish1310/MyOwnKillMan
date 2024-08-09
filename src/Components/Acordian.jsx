/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const topicsWithWords = {
  Colors: [
    "Red", "Green", "Blue", "Yellow", "Purple", "Orange", "Cyan", "Magenta", 
    "Lime", "Indigo", "Violet", "Pink", "Brown", "Gray", "Black", "White"
  ],

  Space: [
    "Planet", "Star", "Galaxy", "Meteor", "Comet", "Asteroid", "Nebula", 
    "Cosmos", "Orbit", "Satellite", "Supernova"
  ],

  Bollywood: [
    "Dangal", "Sholay", "Lagaan", "KabirSingh", "Padmaavat", "Bahubali", 
    "Andhadhun", "Kahaani", "PK", "Barfi", "Devdas", "Sanju"
  ],

  Country: [
    "India", "Brazil", "France", "Australia", "Japan", "Germany", "Italy", 
    "Canada", "China", "Russia", "Egypt", "Mexico", "Spain", "Thailand"
  ],

  MarvelMovies: [
    "Spiderman", "Hulk", "Thor", "BlackPanther", "IronMan", "Avengers", 
    "Guardians", "AntMan", "Loki", "Thanos", "Wolverine", "Deadpool"
  ],

  ProgrammingLanguage: [
    "Java", "JavaScript", "Python", "Swift", "Kotlin", "Ruby",
     "Rust", "Perl"
  ],

  Fruits: [
    "Apple", "Banana", "Orange", "Strawberry", "Watermelon", "Pineapple", 
    "Mango", "Blueberry", "Kiwi", "Peach", "Papaya", "Coconut"
  ],

  Animals: [
    "Elephant", "Giraffe", "Kangaroo", "Dolphin", "Panda", "Penguin", 
    "Cheetah", "Rhinoceros", "Chimpanzee", "Koala", "Squirrel", "Hippopotamus"
  ],

  MusicalInstruments: [
    "Guitar", "Piano", "Violin", "Drum", "Flute", "Saxophone", 
    "Trumpet", "Harmonica", "Accordion"
  ],


  Sports: [
    "Soccer", "Cricket", "Basketball", "Tennis", "Baseball", 
    "Volleyball", "Golf", "Hockey", "Swimming", "Rugby", "Badminton"
  ],

  TechnologyBrands: [
    "Apple", "Samsung", "Microsoft", "Google", "Sony", "Intel", 
    "Huawei", "Amazon", "Facebook", "Tesla",  "Nokia"
  ]
};


function Accordion({ topics }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const getRandomWord = (topic) => {
    const words = topicsWithWords[topic];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  };

  const handleTopicClick = (topic) => {
    const wordToGuess = getRandomWord(topic);
    navigate('/play', { state: { selectedTopic: topic, wordToGuess } });
  };

  return (
    <div className="border-red-500 border flex flex-col bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl p-6 space-y-4 w-full max-w-lg mx-auto shadow-lg shadow-blue-500/50 hover:shadow-lg hover:shadow-purple-900/50">
      <h2
        className="text-4xl md:text-5xl font-bold font-serif text-center cursor-pointer text-neutral-200 hover:text-neutral-300 bg-gradient-to-r from-black to-blue-900 p-4 rounded-t-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        Topics
      </h2>
      {isOpen && (
        <div className="space-y-4 flex flex-col max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-xl mx-auto transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer bg-gradient-to-r from-gray-700 to-gray-800"
              onClick={() => handleTopicClick(topic)}
            >
              <div className="p-4 rounded-xl text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-400">
                {topic}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Accordion;

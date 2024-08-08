/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const topicsWithWords = {
  Animal: ["Cat", "Dog", "Elephant", "Tiger", "Lion"],
  Space: ["Planet", "Star", "Galaxy", "Meteor", "Comet"],
  Food: ["Pizza", "Burger", "Pasta", "Sushi", "Salad"],
  Country: ["India", "Brazil", "France", "Australia", "Japan"],
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
    <div className="flex flex-col bg-gradient-to-r from-red-700 to-black text-white rounded-xl p-4 space-y-4 w-full text-center shadow-lg shadow-blue-500/50 hover:shadow-lg hover:shadow-purple-900/50">
      <h2
        className="text-5xl font-bold font-serif cursor-pointer text-neutral-200 hover:text-neutral-300 shadow-lg shadow-purple-400/50 bg-gradient-to-r from-black to-blue-600 p-2 rounded-t-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        Topics
      </h2>
      {isOpen && (
        <div className="space-y-2 flex flex-col">
          <hr className="border-gray-900 h-1 bg-gray-900" />
          <div className="flex flex-col gap-4">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="border border-slate-950 rounded-xl mx-auto transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
                onClick={() => handleTopicClick(topic)}
              >
                <div className="bg-gradient-to-r from-cyan-200 to-white bg-clip-text hover:bg-clip-text text-transparent p-4 rounded-xl">
                  <dt className="text-4xl font-bold">{topic}</dt>
                  <div className="h-1 bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent w-1/4 mt-2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Accordion;

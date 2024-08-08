// eslint-disable-next-line no-unused-vars
import React from 'react';
import Accordion from '../Components/Acordian';

const topicsWithWords = {
  Animal: ["Cat", "Dog", "Elephant", "Tiger", "Lion"],
  Space: ["Planet", "Star", "Galaxy", "Meteor", "Comet"],
  Food: ["Pizza", "Burger", "Pasta", "Sushi", "Salad"],
  Country: ["India", "Brazil", "France", "Australia", "Japan"],
};

const topics = Object.keys(topicsWithWords);

function Select() {
  console.log('Topics:', topics);

  return (
    <div className='bg-slate-900 h-screen flex flex-col items-center justify-center'>
      <Accordion topics={topics} />
    </div>
  );
}

export default Select;

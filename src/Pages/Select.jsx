// eslint-disable-next-line no-unused-vars
import React from 'react';
import Accordion from '../Components/Acordian';
import bgImage from '../assets/bg.jpg';



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
    <div >
      
    <div className='bg-cover bg-center h-screen flex flex-col items-center justify-center' style={{backgroundImage: `url('${bgImage}')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
    
   
    
    
    
      <Accordion topics={topics} />
    </div>

    </div>
  );
}

export default Select;

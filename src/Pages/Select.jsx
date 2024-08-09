// eslint-disable-next-line no-unused-vars
import React from 'react';
import Accordion from '../Components/Acordian';
import bgImage from '../assets/bg.jpg';



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

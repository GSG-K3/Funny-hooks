import React, { useState, useEffect } from "react";
import Joke from './Joke';

  const Category = () => {
const [joke, setJoke] = useState('');
const[category , setCategory] = useState('');

const handleChange =(event)=>{
  setCategory(event.target.value);
}
  
useEffect(
  () => {
    if(category)
  fetch(`https://sv443.net/jokeapi/v2/joke/${category}`)
  .then(response => response.json())
  .then(data => {
    if(data.joke)
  setJoke(data.joke);
  else
setJoke(`-${data.setup} -${data.delivery}`)
  console.log(data) 
  });
  },
  [category]   //Update
  );

  return (
    <div>
    <div onChange={handleChange}>
     <input type='radio' value='Programming' name='category'/> 
     Programming
     <input type='radio' value='Any' name='category'/> 
    Any
    <input type='radio' value='Miscellaneous' name='category'/> 
    Miscelleneous
    <input type='radio' value='Dark' name='category'/> 
    Dark
      </div> 
    <Joke jokeText= {joke}/> 
    </div>
  );
};
export default Category;
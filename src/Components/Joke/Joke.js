import React from 'react';
import './Joke.css';
const Joke =({jokeText}) =>{
  return (
  <p className = 'jokeText'>{jokeText}</p>
  )
}

export default Joke;
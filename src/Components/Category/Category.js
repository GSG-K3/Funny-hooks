import React, { useState, useEffect } from 'react';
import './Category.css';
import Joke from '../Joke/Joke'

const Category = () => {
  const [joke, setJoke] = useState('');
  const [category, setCategory] = useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const getJoke = () => {
    if (category)
      fetch(`https://sv443.net/jokeapi/v2/joke/${category}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.joke) setJoke(data.joke);
          else setJoke(`-${data.setup} -${data.delivery}`);
        });
  };

  useEffect(getJoke, [category]);

  return (
    <div>
      <div onChange={handleChange}>
        <label htmlFor='Programming'>
          <input type='radio' value='Programming' name='category' />
          Programming
        </label>
        <label htmlFor='Any'>
          <input type='radio' value='Any' name='category' />
          Any
        </label>
        <label htmlFor='Miscellaneous'>
          <input type='radio' value='Miscellaneous' name='category' />
          Miscelleneous
        </label>
        <label htmlFor='Dark'>
          <input type='radio' value='Dark' name='category' />
          Dark
        </label>
        <button onClick={getJoke}>Another Joke</button>
      </div>
      <Joke jokeText={joke}/>
    </div>
  );
};
export default Category;

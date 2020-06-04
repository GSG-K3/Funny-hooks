import React, { useState, useEffect } from './node_modules/react';
import Joke from './Joke';

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
          console.log(data);
        });
  };

  useEffect(() => {
    getJoke();
  }, [category]);

  return (
    <div>
      <div onChange={handleChange}>
        <input type='radio' value='Programming' name='category' />
        Programming
        <input type='radio' value='Any' name='category' />
        Any
        <input type='radio' value='Miscellaneous' name='category' />
        Miscelleneous
        <input type='radio' value='Dark' name='category' />
        Dark
      </div>
      <Joke jokeText={joke} />
      <button onClick={getJoke}>Another Joke</button>
    </div>
  );
};
export default Category;

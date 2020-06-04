import React from 'react';
import people from '../../images/laugh.png';
import Category from '../Category/Category';

import './Home.css';
const Home = () => {
  return (
    <div>
      <div className='logo'>Funny Hooks.</div>
      <div className='title-img'>
        <div className="category-section">
          <div className='page-title'>
            Your daily does of <span>Jokes</span>
          </div>
          <Category />
        </div>

        <img className='home-img' src={people} alt='two people laughing' />
      </div>
    </div>
  );
};

export default Home;

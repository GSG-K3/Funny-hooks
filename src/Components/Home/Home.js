import React, { Component } from 'react';
import people from '../../images/laugh.png';
import './Home.css';
class Home extends Component {
  render() {
    return (
      <div>
        <div className='logo'>Funny Hooks.</div>
        <div className='title-img'>
          <div className='title'>
            Your daily does of <span>Jokes</span>
          </div>
          <img className='home-img' src={people} alt='two people laughing' />
        </div>
      </div>
    );
  }
}
export default Home;

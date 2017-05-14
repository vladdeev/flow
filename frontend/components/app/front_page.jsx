import React from 'react';
import HeaderContainer from '../header/header_container';
import { Link, hashHistory } from 'react-router';

const handleClick = () => e => {
  e.preventDefault();
  hashHistory.push('/signup');
}

const FrontPage = (props) => (
  <div>
    <HeaderContainer />
    <div className='front-container'>
      <div className="first-screen">
        <h1>Get the job done</h1>
        <h2>Flow is the best way to get your team work together</h2>
        <h3 onClick={handleClick()}>Join Flow for free</h3>
      </div>
    </div>
  </div>
);

export default FrontPage;

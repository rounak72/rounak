import React from 'react';
import './App.css';
import 'tachyons';

function Card({ id, username, email }) {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow'>
      <img className='App-logo' src={`https://robohash.org/${id}`} alt='MyPic'></img>
      <div className='big-light-red tc'>{username}</div>
      <div className='big-light-red tc'>{email}</div>
    </div>
  );
}

export default Card;

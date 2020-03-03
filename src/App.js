import React from 'react';
import './App.css';

const getMovie = function (name, start) {
  return name + ' , ' + start;
};
console.log( 'Function expression getMovie return name + start :  ' , getMovie('Averages', '2018'));
function App() {
  return (
      <div className='wrap'>
        <p className='wrap__title'>1. Arrow functions</p>
      </div>
  );
}

export default App;

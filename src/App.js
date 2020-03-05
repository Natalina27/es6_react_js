import React from 'react';
import './App.css';

//1.
const getMovie = (name, start) => name + ' , ' + start;
//const getMovie = function(name, start){return name + ' , ' + start;}
console.log( 'Function expression getMovie return name + start :  ' , getMovie('Averages', '2018'));

//2.


// function API () {
//     this.url = 'https://reactwarriors.com';
// }
// API.prototype.get = function () {
//     return [1, 2].map(function (number) {
//         console.log('this', this);
//         return number;
//     }.bind(this))
// }
// const api = new API();
// api.get();



function App() {
  return (
      <div className='wrap'>
        <p className='wrap__title'>1. Arrow functions</p>
      </div>
  );
}

export default App;

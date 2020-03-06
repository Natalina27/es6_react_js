//Arrow functions

import React from 'react';
import './App.css';

//1.
let getMovie = (name, start) => name + ' , ' + start;
//const getMovie = function(name, start){return name + ' , ' + start;}
console.log( 'Function expression getMovie return name + start :  ' , getMovie('Averages', '2018'));

//2.

function API () {
    this.url = 'https://reactwarriors.com';
}

API.prototype.get = function () {
    return [1, 2].map(number =>
    {
        console.log('this', this);
        return number;
    });
};
console.log(API);


// API.prototype.get = function () {
//     return [1, 2].map(function (number) {
//         console.log('this', this);
//         return number;
//     }.bind(this))
// }
// const api = new API();
// api.get();

//3. arguments
getMovie = function (...args) {
    console.log(args);
    return args[0]+' '+args[1];
};
console.log(getMovie('Movie', 2007));

function App() {
  return (
      <div className='wrap'>
        <p className='wrap__title'>1. Arrow functions</p>
      </div>
  );
}

export default App;

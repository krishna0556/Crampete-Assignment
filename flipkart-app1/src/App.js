//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Ads from './components/Ads';

function App() {
  return (
    <div className="App">
      <Header/>
      <Categories/>
      <Ads/>
    </div>
  );
}
export default App;

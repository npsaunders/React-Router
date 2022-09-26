import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from './pages/Main';
import stockData from './data.json';

function App(props) {
  return (
    <div>
      <Nav />
      <Main stockData={stockData} />
    </div>
  );
}


export default App;

import React from 'react';

import './App.css';
import Home from './page/home/Home';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div>
      <Navbar/>
      <Home />
    </div>
  );
}

export default App;

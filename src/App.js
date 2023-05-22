import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './App.css';
import Home from './page/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import About from './page/about/About';
import Packages from './components/tourPackages/Packages';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about/:id' element={<About />}></Route>
          <Route path='/packages/:state' element={<Packages/>}></Route>
        </Routes>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;


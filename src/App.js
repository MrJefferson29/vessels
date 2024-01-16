import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Home';
import Project from './Components/Project';
import News from './Components/News';
import S1 from './Components/S1';
import S2 from './Components/S2';
import S3 from './Components/S3';
import S4 from './Components/S4';
import S5 from './Components/S5';
import S6 from './Components/S6';
import FAQ from './Components/FAQ';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/home' element={<Home />}></Route>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/projects' element={<Project />}></Route>
        <Route exact path='/projects/news' element={<News />}></Route>
        <Route exact path='/help-center/faq' element={<FAQ />}></Route>
        <Route exact path='/vessels/s5-vessel' element={<S1 />}></Route>
        <Route exact path='/vessels/e5-vessel' element={<S2 />}></Route>
        <Route exact path='/vessels/e7-vessel' element={<S3 />}></Route>
        <Route exact path='/vessels/o5-vessel' element={<S4 />}></Route>
        <Route exact path='/vessels/v5-vessel' element={<S5 />}></Route>
        <Route exact path='/vessels/v7-vessel' element={<S6 />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

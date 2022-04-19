import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './home-page/HomePage';

const App = () => {
  document.title = "Wormsties"
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<HomePage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;

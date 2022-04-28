import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import NotFoundPage from './components/notfound/NotFoundPage';
import HomePage from './components/homepage/HomePage';
import LanguagesPage from './components/languages/Languages';
import Stories from './components/stories/Stories';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/languages" element={<LanguagesPage />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

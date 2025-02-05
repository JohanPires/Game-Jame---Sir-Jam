import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './index.css';
import Form from './pages/Form';
import Results from './pages/Results';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;

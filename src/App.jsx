import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Integration from './components/Integration';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className='text-lg font-medium'>
        <Integration/>
        </div>
        <Routes>
            
        </Routes>
      </div>
    </Router>
  );
};

export default App;
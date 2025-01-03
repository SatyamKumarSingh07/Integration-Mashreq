import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Integration from './components/Integration';
import AboutIntegration from './components/AboutIntegration';
import TeamPage from './components/Teampage';
import Products from './components/Products';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Integration/>}/>
          <Route path="/about" element={<AboutIntegration />} />
          <Route path="/team" element={<TeamPage/>} />
          <Route path="/products" element={<Products/>}/>
          {/* <Route path="/support" element={<div>Support Groups Page</div>} />
          <Route path="/applications" element={<div>Our Products Page</div>} />
          <Route path="/initiative" element={<div>Future Endeavors Page</div>} />
          <Route path="/team" element={<div>Team Page</div>} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
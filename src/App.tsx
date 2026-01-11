import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLanding from './pages/MainLanding';
import AgencyLanding from './pages/AgencyLanding';
import InfluencerLanding from './pages/InfluencerLanding';

const App: React.FC = () => {
  return (
    <Router basename="/Dekho-Domain">
      <Routes>
        <Route path="/" element={<MainLanding />} />
        <Route path="/partner" element={<AgencyLanding />} />
        <Route path="/creator" element={<InfluencerLanding />} />
      </Routes>
    </Router>
  );
};

export default App;

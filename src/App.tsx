import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import MainLanding from './pages/MainLanding';
import AgencyLanding from './pages/AgencyLanding';
import InfluencerLanding from './pages/InfluencerLanding';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLanding />} />
        <Route path="/partner" element={<AgencyLanding />} />
        <Route path="/creator" element={<InfluencerLanding />} />
      </Routes>
    </Router>
  );
};

export default App;

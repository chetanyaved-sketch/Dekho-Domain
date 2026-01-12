import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLanding from './pages/MainLanding';
import AgencyLanding from './pages/AgencyLanding';
import InfluencerLanding from './pages/InfluencerLanding';

const App: React.FC = () => {
  const basename = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' ? '' : '/Dekho-Domain';

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<MainLanding />} />
        <Route path="/partner" element={<AgencyLanding />} />
        <Route path="/creator" element={<InfluencerLanding />} />
      </Routes>
    </Router>
  );
};

export default App;

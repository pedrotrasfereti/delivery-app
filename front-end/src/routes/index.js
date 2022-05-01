import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Children */
import Login from '../components/pages';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/" element={ <Login /> } />
      </Routes>
    </Router>
  );
}

export default AppRoutes;

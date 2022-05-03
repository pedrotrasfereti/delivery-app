import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Children */
import { Base, Login, Register } from '../components/pages';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={ <Register /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/" element={ <Base /> } />
      </Routes>
    </Router>
  );
}

export default AppRoutes;

import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Children */
import { NavBar } from '../components/atoms';
import { Header } from '../components/molecules';

import {
  Base,
  Checkout,
  Login,
  Order,
  Products,
  Register,
} from '../components/pages';
import Orders from '../components/pages/Orders';

function AppRoutes() {
  return (
    <Router>
      {/* Header */}
      <Header />

      <Routes>
        <Route path="/customer/orders/:id" element={ <Order /> } />
        <Route path="/customer/orders" element={ <Orders /> } />
        <Route path="/customer/checkout" element={ <Checkout /> } />
        <Route path="/customer/products" element={ <Products /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/" element={ <Base /> } />
      </Routes>

      {/* Mobile "Icon Bar" Menu */}
      <NavBar iconbar />
    </Router>
  );
}

export default AppRoutes;

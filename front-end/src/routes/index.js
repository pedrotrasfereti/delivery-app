import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

/* Children */
import { NavBar } from '../components/atoms';
import { Header } from '../components/molecules';

import {
  Account,
  Checkout,
  Login,
  Order,
  Orders,
  Products,
  Register,
} from '../components/pages';

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
        <Route path="/account" element={ <Account /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/" element={ <Navigate replace to="/login" /> } />
      </Routes>

      {/* Mobile "Icon Bar" Menu */}
      <NavBar iconbar />
    </Router>
  );
}

export default AppRoutes;

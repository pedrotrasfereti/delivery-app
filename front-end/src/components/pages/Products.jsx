import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/* State */
import { useDispatch, useSelector } from 'react-redux';

import {
  setProducts,
  fetchProducts,
} from '../../redux/features/productsSlice';

import {
  setCart,
  updateTotalPrice,
} from '../../redux/features/checkoutSlice';

/* Children */
import { CheckoutBtn, SideBar } from '../atoms';
import { ProductCards } from '../organisms';
import { ClassicLayout } from '../templates';

/* Utils */
import generateCart from '../../utils/generateCart';
import calculateTotalPrice from '../../utils/calculateTotalPrice';
import LocalStorageMethods from '../../utils/localStorage';

/* Styles */
const mobileStyle = {
  flexFlow: 'column nowrap',
};

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.checkout);
  const { products } = useSelector((state) => state.products);

  // Set Products
  useEffect(() => {
    const user = LocalStorageMethods.getParsedItem('user');
    const localProducts = LocalStorageMethods.getParsedItem('products');

    if (user) {
      if (localProducts) {
        dispatch(setProducts(localProducts));
      } else {
        dispatch(fetchProducts(user.token));
      }
    } else {
      navigate('/login');
    }
  }, [dispatch, navigate]);

  // Update Cart
  useEffect(() => {
    const updatedCart = generateCart(products);

    dispatch(setCart(updatedCart));
  }, [dispatch, products]);

  // Update Total Price
  useEffect(() => {
    const updatedTotalPrice = calculateTotalPrice(cart);

    dispatch(updateTotalPrice(updatedTotalPrice));
  }, [dispatch, cart]);

  return (
    <ClassicLayout
      id="products-page"
      css={ { '@bp3': mobileStyle } }
    >
      <SideBar />

      <main>
        {
          products.length && <ProductCards products={ products } />
        }
      </main>

      <CheckoutBtn />
    </ClassicLayout>
  );
};

export default Products;

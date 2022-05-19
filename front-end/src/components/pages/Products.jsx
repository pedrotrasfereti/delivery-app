import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

/* State */
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, fetchProducts } from '../../redux/features/productsSlice';
import {
  updateCart,
  updateTotalPrice,
} from '../../redux/features/checkoutSlice';

/* Children */
import { CheckoutBtn, SideBar } from '../atoms';
// import {
//   StitchesComponent as CheckoutBtnStitches,
// } from '../atoms/CheckoutBtn';
import { ProductCards } from '../organisms';
// import { ClassicLayout } from '../templates';

/* Utils */
import generateCart from '../../utils/generateCart';
import calculateTotalPrice from '../../utils/calculateTotalPrice';
import LocalStorageMethods from '../../utils/localStorage';

/* Styles */
// const mobileStyle = {
//   flexFlow: 'column nowrap',

//   [`& ${CheckoutBtnStitches}`]: {
//     display: 'none',
//   },
// };

const Products = () => {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.checkout);
  const { products } = useSelector((state) => state.products);

  // set products
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
      setShouldRedirect(true);
    }
  }, [dispatch]);

  // update cart
  useEffect(() => {
    const updatedCart = generateCart(products);

    dispatch(updateCart(updatedCart));
  }, [dispatch, products]);

  // update total price
  useEffect(() => {
    const updatedTotalPrice = calculateTotalPrice(cart);

    dispatch(updateTotalPrice(updatedTotalPrice));
  }, [dispatch, cart]);

  return (
    // <ClassicLayout
    //   id="products-page"
    //   css={ { '@bp3': mobileStyle } }
    // >
    <div>
      <SideBar />

      <main>
        <ProductCards />
      </main>

      <CheckoutBtn />

      {/* Redirect to Login */}
      {
        shouldRedirect && <Navigate replace to="/login" />
      }
    </div>
    // </ClassicLayout>
  );
};

export default Products;

import React, { useEffect } from 'react';

/* State */
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../redux/features/productsSlice';
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

/* Services */
import { getAllProducts } from '../../services/request';

/* Utils */
import generateCart from '../../utils/generateCart';
import calculateTotalPrice from '../../utils/calculateTotalPrice';

/* Styles */
// const mobileStyle = {
//   flexFlow: 'column nowrap',

//   [`& ${CheckoutBtnStitches}`]: {
//     display: 'none',
//   },
// };

const Products = () => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.checkout);
  const { products } = useSelector((state) => state.products);

  // set products
  useEffect(() => {
    const user = localStorage.getItem('user');
    const { token } = JSON.parse(user);

    async function getData() {
      try {
        const data = await getAllProducts(token);
        dispatch(setProducts(data));
      } catch (err) {
        console.log(err);
      }
    }

    getData();
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
    </div>
    // </ClassicLayout>
  );
};

export default Products;

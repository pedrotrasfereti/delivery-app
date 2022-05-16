import React, { useState, useEffect } from 'react';

/* Children */
import { CheckoutBtn, SideBar } from '../atoms';
import {
  StitchesComponent as CheckoutBtnStitches,
} from '../atoms/CheckoutBtn';
import { ProductCards } from '../organisms';
import { ClassicLayout } from '../templates';

/* Services */
import { getAllProducts } from '../../services/request';

/* Styles */
// Change flex-direction to 'column'
const mobileStyle = {
  flexFlow: 'column nowrap',

  // hide checkout button
  [`& ${CheckoutBtnStitches}`]: {
    display: 'none',
  },
};

const Products = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const user = localStorage.getItem('user');
    const { token } = JSON.parse(user);

    async function getData() {
      try {
        const getAll = await getAllProducts(token);
        setProductsData(getAll);
      } catch (err) {
        console.log(err);
      }
    }

    getData();
  }, []);

  return (
    <ClassicLayout
      id="products-page"
      css={ { '@bp3': mobileStyle } }
    >
      <SideBar />

      <main>
        <ProductCards products={ productsData } />
      </main>

      <CheckoutBtn />
    </ClassicLayout>
  );
};

export default Products;

import React, { useState, useEffect } from 'react';

/* Children */
import { CheckoutBtn, SideBar } from '../atoms';
import {
  StitchesComponent as CheckoutBtnStitches,
} from '../atoms/CheckoutBtn';
import { ProductCards } from '../organisms';

/* Styled */
import { styled } from '../../stitches.config';
import { getAllProducts } from '../../services/request';

const StitchesComponent = styled('div', {
  display: 'flex',
  minHeight: '100vh',
  paddingTop: '5rem',

  '@bp3': {
    flexFlow: 'column nowrap',
    paddingBottom: '$5',

    [`& ${CheckoutBtnStitches}`]: {
      display: 'none',
    },
  },
});

const Main = styled('main', {
  backgroundColor: '$gray100',
  position: 'relative',
  width: '100%',
  zIndex: '0',
});

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
    <StitchesComponent id="products-page">
      <SideBar />

      <Main>
        <ProductCards products={ productsData } />
      </Main>

      <CheckoutBtn />
    </StitchesComponent>
  );
};

export default Products;

import React, { useState, useEffect } from 'react';

/* Children */
import { CheckoutBtn, Sidebar } from '../atoms';
import {
  StitchesComponent as CheckoutBtnStitches,
} from '../atoms/CheckoutBtn';
import { Header } from '../molecules';
import { ProductCards } from '../organisms';

/* Styled */
import { styled } from '../../stitches.config';
import { getAllProducts } from '../../services/request';

const StitchesComponent = styled('div', {
  minHeight: '100vh',

  '&>.Container': {
    display: 'flex',
    paddingTop: '5rem',
    minHeight: '100vh',
  },

  '@bp3': {
    [`&>${CheckoutBtnStitches}`]: {
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
      {/* Header */}
      <Header />

      <div className="Container">
        <Sidebar />

        <Main>
          <ProductCards products={ productsData } />
        </Main>
      </div>

      {/* Footer */}
      <footer>
        <nav id="footer-nav" />
      </footer>

      <CheckoutBtn />
    </StitchesComponent>
  );
};

export default Products;

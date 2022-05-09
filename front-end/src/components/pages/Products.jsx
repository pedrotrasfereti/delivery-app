import * as React from 'react';

/* Children */
import { Sidebar } from '../atoms';
import { Header } from '../molecules';
import { ProductCards } from '../organisms';

/* Styled */
import { styled } from '../../stitches.config';

const StitchesComponent = styled('div', {
  minHeight: '100vh',

  '&>.Container': {
    display: 'flex',
    paddingTop: '5rem',
    minHeight: '100vh',
  },
});

const Main = styled('div', {
  backgroundColor: '$gray100',
  position: 'relative',
  width: '100%',
  zIndex: '0',
});

function Products() {
  return (
    <StitchesComponent id="products-page">
      {/* Header */}
      <Header />

      <div className="Container">
        <Sidebar />

        <Main>
          <ProductCards />
        </Main>
      </div>

      {/* Footer */}
      <footer>
        <nav id="footer-nav" />
      </footer>
    </StitchesComponent>
  );
}

export default Products;

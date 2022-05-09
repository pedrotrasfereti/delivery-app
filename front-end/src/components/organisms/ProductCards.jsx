import * as React from 'react';

/* Children */
import { ProductCard } from '../molecules';

/* Styles */
import { styled } from '../../stitches.config';

const StitchesComponent = styled('section', {
  padding: '2rem 1.25rem 0',

  '&>h2': {
    color: '$textDark',
    fontFamily: '$sans2',
    fontSize: '$6',
    fontWeight: '$5',
    textAlign: 'center',
  },

  '&>.Container': {
    marginTop: '2rem',
    display: 'flex',
    flexFlow: 'row wrap',
    gap: '1.25rem',
  },
});

function ProductCards() {
  return (
    <StitchesComponent>
      <h2>All products</h2>

      <div className="Container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </StitchesComponent>
  );
}

export default ProductCards;

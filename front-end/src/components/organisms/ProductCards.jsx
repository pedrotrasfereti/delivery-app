import * as React from 'react';

/* State */
import { useSelector } from 'react-redux';

/* Children */
import { ProductCard } from '../molecules';

/* Styles */
import { styled } from '../../stitches.config';

const StitchesComponent = styled('section', {
  '&>h2': {
    color: '$textDark',
    fontFamily: '$sans2',
    fontSize: '$6',
    fontWeight: '$5',
    textAlign: 'center',
  },

  '& #product-cards': {
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'row wrap',
    gap: '$3',
    justifyContent: 'center',
    marginTop: '2rem',
  },
});

function ProductCards() {
  const { products } = useSelector((state) => state.products);

  return (
    <StitchesComponent>
      <h2>All products</h2>

      <section id="product-cards">
        {
          products
            ? products.map((product) => (
              <ProductCard product={ product } key={ product.id } />
            )) : (
              <span>Loading...</span>
            )
        }
      </section>
    </StitchesComponent>
  );
}

export default ProductCards;

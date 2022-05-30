import React from 'react';
import PropTypes from 'prop-types';

/* Children */
import { ProductCard } from '../molecules';

/* Styles */
import { styled } from '../../stitches.config';

const StitchesComponent = styled('section', {
  '& h2': {
    color: '$textDark',
    fontFamily: '$sans2',
    fontSize: '$6',
    fontWeight: '$5',
    textAlign: 'center',
  },

  '& .Container': {
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'row wrap',
    gap: '$3',
    justifyContent: 'center',
    marginTop: '2rem',
  },
});

export default function ProductCards({ products }) {
  return (
    <StitchesComponent id="product-cards">
      <h2>All products</h2>

      <div className="Container">
        {
          products.map((product) => (
            <ProductCard product={ product } key={ product.id } />
          ))
        }
      </div>
    </StitchesComponent>
  );
}

ProductCards.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.number,
      urlImage: PropTypes.string,
    }),
  ),
}.isRequired;

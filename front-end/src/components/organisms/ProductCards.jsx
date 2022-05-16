import * as React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

/* Children */
import { ProductCard } from '../molecules';

/* Styles */
import { styled } from '../../stitches.config';

const StitchesComponent = styled('section', {
  padding: '2rem 0',

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
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$3',
  },
});

function ProductCards({ products }) {
  return (
    <StitchesComponent>
      <h2>All products</h2>

      <div className="Container">
        {
          products
            ? products.map((product) => (
              <ProductCard product={ product } key={ uuid() } />
            )) : (
              <span>Loading...</span>
            )
        }
      </div>
    </StitchesComponent>
  );
}

ProductCards.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    urlImage: PropTypes.string,
  })),
}.isRequired;

export default ProductCards;

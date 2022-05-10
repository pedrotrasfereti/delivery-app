import * as React from 'react';
import PropTypes from 'prop-types';

/* Styles */
import { styled } from '../../stitches.config';

const StitchesComponent = styled('header', {
  height: '325px',
  width: '260px',
  backgroundColor: '$loContrast',
  border: '0',
  borderRadius: '$default',
  boxShadow: 'rgba(149, 157, 165, 0.2) 0 8px 20px',
});

function ProductCard({ product }) {
  return (
    <StitchesComponent>
      <h3>{ product.name }</h3>
      <h3>{ `R$ ${product.price}` }</h3>
      <p>Lorem ipsum dolor sit amet</p>
    </StitchesComponent>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    urlImage: PropTypes.string,
  }),
}.isRequired;

export default ProductCard;

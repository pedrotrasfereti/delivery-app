import * as React from 'react';

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

function ProductCard() {
  return (
    <StitchesComponent>
      <h3>Product #1</h3>
      <p>Lorem ipsum dolor sit amet</p>
    </StitchesComponent>
  );
}

export default ProductCard;

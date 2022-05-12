import * as React from 'react';

/* Styles */
import { styled } from '../../stitches.config';

const StitchesComponent = styled('button', {
  backgroundColor: '$button',
  padding: '20px',
  border: '0',
  borderRadius: '$round',
  position: 'absolute',
  bottom: '15px',
  right: '15px',
});

function CheckoutBtn() {
  return <StitchesComponent />;
}

export default CheckoutBtn;

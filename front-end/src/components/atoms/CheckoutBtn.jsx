import * as React from 'react';

/* State */
import { useSelector } from 'react-redux';

/* Styles */
import { styled } from '../../stitches.config';

const StitchesComponent = styled('button', {
  backgroundColor: '$accent2',
  bottom: '15px',
  border: '0',
  borderRadius: '$round',
  height: '50px',
  position: 'fixed',
  right: '15px',
  width: '50px',

  '&>span': {
    color: '$textLight',
    fontFamily: '$sans',
    fontSize: '$4',
    fontWeight: '$4',
  },
});

function CheckoutBtn() {
  const { total } = useSelector((state) => state.checkout);

  return (
    <StitchesComponent data-testid="customer_products__checkout-bottom-value">
      <span>{ String(total).replace('.', ',') }</span>
    </StitchesComponent>
  );
}

export default CheckoutBtn;

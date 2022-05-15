import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

/* State */
import { useSelector } from 'react-redux';

/* Styles */
import { styled } from '../../stitches.config';

export const StitchesComponent = styled('button', {
  appearance: 'none',
  bottom: '15px',
  border: '0',
  borderRadius: '$edge',
  display: 'flex',
  height: '50px',
  position: 'fixed',
  right: '15px',
  width: '150px',

  '&:hover:not(:disabled)': {
    cursor: 'pointer',
  },

  '&>.customer_products__checkout-label, &>.customer_products__checkout-bottom-value': {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    height: '100%',

    '&>span': {
      color: '$textLight',
      fontFamily: '$sans',
      fontSize: '$4',
      fontWeight: '$4',
    },
  },

  '&>.customer_products__checkout-label': {
    backgroundColor: '$primary',
    flex: '1.15',
  },

  '&>.customer_products__checkout-bottom-value': {
    backgroundColor: '$accent2',
    flex: '1',
  },
});

function CheckoutBtn() {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const { total } = useSelector((state) => state.checkout);

  return (
    <StitchesComponent
      data-testid="customer_products__button-cart"
      disabled={ !total }
      onClick={ () => setShouldRedirect(true) }
    >
      <div className="customer_products__checkout-label">
        <span>Total:</span>
      </div>
      <div className="customer_products__checkout-bottom-value">
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          { String(total).replace('.', ',') }
        </span>
      </div>

      {/* Redirect */}
      {
        shouldRedirect && <Navigate replace to="/customer/checkout" />
      }
    </StitchesComponent>
  );
}

export default CheckoutBtn;

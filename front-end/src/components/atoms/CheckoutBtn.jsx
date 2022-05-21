import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

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

  variants: {
    flat: {
      true: {
        position: 'static',
        borderRadius: '0',
        height: '25px',
        right: '0',
        width: '100%',
      },
    },
  },
});

function CheckoutBtn({ flat }) {
  const { totalPrice } = useSelector((state) => state.checkout);

  const [shouldRedirect, setShouldRedirect] = useState(false);

  return (
    <StitchesComponent
      data-testid="customer_products__button-cart"
      disabled={ !totalPrice }
      onClick={ () => setShouldRedirect(true) }
      flat={ flat }
    >
      <div className="customer_products__checkout-label">
        <span>Total:</span>
      </div>
      <div className="customer_products__checkout-bottom-value">
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          { String(totalPrice.toFixed(2)).replace('.', ',') }
        </span>
      </div>

      {/* Redirect */}
      {
        shouldRedirect && <Navigate to="/customer/checkout" />
      }
    </StitchesComponent>
  );
}

CheckoutBtn.propTypes = {
  flat: PropTypes.bool,
};

CheckoutBtn.defaultProps = {
  flat: false,
};

export default CheckoutBtn;

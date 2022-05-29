import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* State */
import { useSelector } from 'react-redux';

/* Styles */
import { styled } from '../../stitches.config';

/* Utils */
import formatFloat from '../../utils/formatFloat';

export const StitchesComponent = styled('button', {
  alignItems: 'center',
  appearance: 'none',
  background: 'linear-gradient(333deg, rgba(102,51,153,1) 0%, rgba(51,0,102,1) 100%)',
  bottom: '15px',
  border: '0',
  borderRadius: '$default',
  display: 'flex',
  justifyContent: 'space-around',
  padding: '15px 10px',
  position: 'fixed',
  transition: 'ease .3s',
  right: '15px',
  width: '140px',

  // Text
  '& span': {
    color: '$textLight',
    fontFamily: '$sans2',
    fontSize: '18px',
    fontWeight: '$5',
  },

  // States
  '&:hover:not(:disabled)': {
    borderRadius: '2.3rem',
    cursor: 'pointer',
  },

  '&:disabled': {
    opacity: '.9',
  },

  '@bp3': {
    bottom: '64px',
    height: '24px',
    position: 'fixed',
    right: '0',
    width: '100%',

    '&>span': {
      fontFamily: '$sans2',
      fontSize: '$2',
      fontWeight: '$5',
    },
  },
});

export function CheckoutBtn() {
  const navigate = useNavigate();

  const { totalPrice } = useSelector((state) => state.checkout);

  const [showTotal, setShowTotal] = useState(true);

  return (
    <StitchesComponent
      disabled={ !totalPrice }
      onClick={ () => navigate('/customer/checkout') }
      onMouseOver={ () => setShowTotal(false) }
      onMouseOut={ () => setShowTotal(true) }
    >
      <span>{ showTotal ? 'Total:' : 'Checkout' }</span>
      {
        showTotal && (
          <span>
            $
            { formatFloat(totalPrice) }
          </span>
        )
      }
    </StitchesComponent>
  );
}

export default CheckoutBtn;

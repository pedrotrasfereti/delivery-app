import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* State */
import { useSelector } from 'react-redux';

/* Styles */
import Styled from './Styled';

/* Utils */
import formatFloat from '../../../utils/formatFloat';

export function CheckoutBtn() {
  const navigate = useNavigate();

  const { totalPrice } = useSelector((state) => state.checkout);

  const [showTotal, setShowTotal] = useState(true);

  // Conditional Style
  const mobileStyle = {
    '@bp3': {
      display: 'none',
    },
  };

  return (
    <Styled
      disabled={ !totalPrice }
      onClick={ () => navigate('/customer/checkout') }
      onMouseOver={ () => setShowTotal(false) }
      onMouseOut={ () => setShowTotal(true) }
      css={ mobileStyle }
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
    </Styled>
  );
}

export default CheckoutBtn;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* Assets */
import { BsCart as CartIcon } from 'react-icons/bs';

/* State */
import { useSelector } from 'react-redux';

/* Styles */
import Styled from './Styled';

/* Utils */
import formatFloat from '../../../utils/formatFloat';

export default function CheckoutBtn() {
  const navigate = useNavigate();

  const { cart, totalPrice } = useSelector((state) => state.checkout);

  const [showTotal, setShowTotal] = useState(true);

  // Conditional Styles
  const extraStyles = {
    display: totalPrice ? 'flex' : 'none',

    '@bp3': {
      '&::after': {
        content: String(cart.length),
      },
    },
  };

  return (
    <Styled
      disabled={ !totalPrice }
      onClick={ () => navigate('/customer/checkout') }
      onMouseOver={ () => setShowTotal(false) }
      onMouseOut={ () => setShowTotal(true) }
      css={ extraStyles }
    >
      <span className="Label">
        { showTotal ? 'Total:' : 'Checkout' }
      </span>
      {
        showTotal && (
          <span className="TotalPrice">
            $
            { formatFloat(totalPrice) }
          </span>
        )
      }
      <CartIcon className="CartIcon" />
    </Styled>
  );
}

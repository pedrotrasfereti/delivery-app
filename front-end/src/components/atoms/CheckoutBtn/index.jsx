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

export function CheckoutBtn() {
  const navigate = useNavigate();

  const { totalPrice } = useSelector((state) => state.checkout);

  const [showTotal, setShowTotal] = useState(true);

  // Conditional Style
  const styles = {
    display: totalPrice ? 'flex' : 'none',
  };

  return (
    <Styled
      disabled={ !totalPrice }
      onClick={ () => navigate('/customer/checkout') }
      onMouseOver={ () => setShowTotal(false) }
      onMouseOut={ () => setShowTotal(true) }
      css={ styles }
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

export default CheckoutBtn;

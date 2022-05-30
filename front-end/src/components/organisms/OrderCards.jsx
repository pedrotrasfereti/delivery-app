import React from 'react';
import PropTypes from 'prop-types';

/* Children */
import OrderCard from '../molecules/OrderCard';

/* Styles */
import { styled } from '../../stitches.config';

const Styled = styled('section', {
  alignItems: 'center',
  display: 'flex',
  flexFlow: 'column nowrap',
  gap: '$4',

  '& h2': {
    color: '$textDark',
    fontFamily: '$sans2',
    fontSize: '$6',
    fontWeight: '$5',
    textAlign: 'center',
  },

  '& .Container': {
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'row wrap',
    gap: '$5',
    justifyContent: 'center',
    padding: '0 $5',
  },
});

export default function OrderCards({ orders }) {
  return (
    <Styled id="order-cards">
      <h2>All orders</h2>

      <div className="Container">
        {
          (
            orders.map((order) => (
              <OrderCard key={ order.id } order={ order } />
            ))
          )
        }
      </div>
    </Styled>
  );
}

OrderCards.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      status: PropTypes.string,
      saleDate: PropTypes.string,
      totalPrice: PropTypes.number,
    }),
  ),
}.isRequired;

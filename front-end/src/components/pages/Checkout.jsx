import React from 'react';

/* State */
import { useSelector } from 'react-redux';

/* Children */
import { Table } from '../molecules';
import { CheckoutForm } from '../organisms';

/* Styles */
import { styled } from '../../stitches.config';
import { ClassicLayout } from '../templates';

/* Utils */
import formatFloat from '../../utils/formatFloat';

const Main = styled('main', {
  alignItems: 'center',
  display: 'flex',
  flexFlow: 'column nowrap',
  gap: '$5',
});

function Checkout() {
  const { cart, totalPrice } = useSelector((state) => state.checkout);

  return (
    <ClassicLayout id="checkout-page">
      <Main>
        <Table
          id="checkout-table"
          data={ {
            header: [
              'Item',
              'Name',
              'Quantity',
              'Unit Value',
              'Sub-total',
              'Remove Item',
            ],
            body: cart,
            footer: ['Total', formatFloat(totalPrice)],
          } }
        />

        <CheckoutForm />
      </Main>
    </ClassicLayout>
  );
}

export default Checkout;

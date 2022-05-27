import React from 'react';

/* State */
import { useSelector } from 'react-redux';

/* Children */
import { Table } from '../molecules';
import { CheckoutForm } from '../organisms';

/* Styles */
import { ClassicLayout } from '../templates';

function Checkout() {
  const { cart, totalPrice } = useSelector((state) => state.checkout);

  return (
    <ClassicLayout id="checkout-page">
      <main>
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
            footer: ['Total', totalPrice],
          } }
        />

        <CheckoutForm />
      </main>
    </ClassicLayout>
  );
}

export default Checkout;

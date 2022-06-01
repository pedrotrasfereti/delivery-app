import React from 'react';

/* State */
import { useSelector } from 'react-redux';

/* Children */
import { Table } from '../../molecules';
import { CheckoutForm } from '../../organisms';

/* Utils */
import formatFloat from '../../../utils/formatFloat';

/* Styles */
import { ClassicLayout } from '../../templates';
import Styled from './Styled';

export default function Checkout() {
  const { cart, totalPrice } = useSelector((state) => state.checkout);

  return (
    <ClassicLayout>
      <Styled>
        <Table
          data={ {
            header: [
              'Name',
              'Quantity',
              'Unit Value',
              'Sub-total',
              'Remove Item',
            ],
            body: cart.map((p) => ({
              ...p,
              price: formatFloat(p.price),
              subTotal: formatFloat(p.subTotal),
            })),
            footer: ['Total', formatFloat(totalPrice)],
          } }
        />

        <CheckoutForm />
      </Styled>
    </ClassicLayout>
  );
}

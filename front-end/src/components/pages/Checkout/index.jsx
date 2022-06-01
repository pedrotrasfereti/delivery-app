import React from 'react';

/* State */
import { useSelector } from 'react-redux';

/* Children */
import { Table } from '../../molecules';
import { CheckoutForm } from '../../organisms';

/* Styles */
import { ClassicLayout } from '../../templates';
import Styled from './Styled';

/* Utils */
import formatFloat from '../../../utils/formatFloat';

export default function Checkout() {
  const { cart, totalPrice } = useSelector((state) => state.checkout);

  return (
    <ClassicLayout>
      <Styled>
        <Table
          body={
            cart.map((p) => ({
              ...p,
              price: formatFloat(p.price),
              subTotal: formatFloat(p.subTotal),
            }))
          }
          caption="My order"
          cols={ ['Name', 'Quantity', 'Unit Value', 'Sub-total', 'Remove Item'] }
          sum={ formatFloat(totalPrice) }
          deleteItem
        />
        <CheckoutForm />
      </Styled>
    </ClassicLayout>
  );
}

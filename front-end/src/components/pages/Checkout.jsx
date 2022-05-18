import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

/* Children */
import { Table } from '../molecules';
import { CheckoutForm } from '../organisms';

/* Styles */
import { ClassicLayout } from '../templates';

function Checkout() {
  const { cart, totalPrice } = useSelector((state) => state.checkout);

  const initialState = {
    header: [
      'Item',
      'Name',
      'Quantity',
      'Unit Value',
      'Sub-total',
      'Remove Item',
    ],
    body: cart,
    // footer[0]: label, footer[1]: value
    footer: ['Total', totalPrice.toFixed(2)],
  };

  const [tableData, setTableData] = useState(initialState);

  useEffect(() => {
    setTableData((prev) => ({
      ...prev,
      body: cart,
      footer: [prev.footer[0], totalPrice.toFixed(2)],
    }));
  }, [cart, totalPrice]);

  return (
    <ClassicLayout id="checkout-page">
      <main>
        <Table
          id="checkout-table"
          data={ tableData }
        />

        <CheckoutForm />
      </main>
    </ClassicLayout>
  );
}

export default Checkout;

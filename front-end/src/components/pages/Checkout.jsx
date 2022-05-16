import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

/* Children */
import { Table } from '../molecules';
import { CheckoutForm } from '../organisms';

/* Styles */
import { ClassicLayout } from '../templates';

/* Utils */
import transformProducts from '../../utils/transformProducts';

function Checkout() {
  const initialState = {
    header: [
      'Item',
      'Name',
      'Quantity',
      'Unit Value',
      'Sub-total',
      'Remove Item',
    ],
    body: [''],
    // footer[0]: label, footer[1]: value
    footer: ['Total'],
  };

  const checkout = useSelector((state) => state.checkout);

  const [tableData, setTableData] = useState(initialState);

  useEffect(() => {
    if (checkout) {
      const { products, total } = checkout;
      const productsArray = transformProducts(products);

      setTableData((prev) => ({
        header: [...prev.header],
        body: productsArray,
        footer: [prev.footer[0], total],
      }));
    }
  }, [checkout]);

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

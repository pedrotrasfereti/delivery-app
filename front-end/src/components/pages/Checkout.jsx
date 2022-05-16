import React, { useEffect, useState } from 'react';

/* Children */
import { Table } from '../molecules';

/* State */
import { useSelector } from 'react-redux';

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
        footer: [...prev.footer, total],
      }));
    }
  }, []);

  return (
    <ClassicLayout id="checkout-page">
      <main>
        <Table
          id="checkout-table"
          data={ tableData }
        />
      </main>
    </ClassicLayout>
  );
}

export default Checkout;

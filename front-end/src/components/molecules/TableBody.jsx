import * as React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

/* Children */
import { Button } from '../atoms';

/* State */
import { updateProduct } from '../../redux/features/checkoutSlice';

function TableBody({ data }) {
  const dispatch = useDispatch();

  const removeItem = (product) => {
    dispatch(updateProduct({ ...product, quantity: 0 }));
  };

  return (
    <tbody>
      {
        data.map((product, index) => (
          <tr key={ uuid() }>
            <td
              data-testid={
                `customer_checkout__element-order-table-item-number-${index}`
              }
            >
              { index + 1 }
            </td>
            <td
              data-testid={
                `customer_checkout__element-order-table-name-${index}`
              }
            >
              { product.name }
            </td>
            <td
              data-testid={
                `customer_checkout__element-order-table-quantity-${index}`
              }
            >
              { product.quantity }
            </td>
            <td
              data-testid={
                `customer_checkout__element-order-table-unit-price-${index}`
              }
            >
              { product.price }
            </td>
            <td
              data-testid={
                `customer_checkout__element-order-table-sub-total-${index}`
              }
            >
              { product.subTotal }
            </td>
            <td
              data-testid={
                `customer_checkout__element-order-table-remove-${index}`
              }
            >
              <Button
                dataTestId=""
                type="button"
                handleOnClick={ () => removeItem(product) }
              >
                Remove Item
              </Button>
            </td>
          </tr>
        ))
      }
    </tbody>
  );
}

TableBody.propTypes = {
  body: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default TableBody;

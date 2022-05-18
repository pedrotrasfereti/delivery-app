import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

/* State */
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateTotalPrice } from '../../redux/features/checkoutSlice';

/* Children */
import { Button } from '../atoms';

/* Utils */
import calculateTotalPrice from '../../utils/calculateTotalPrice';

function TableBody({ data }) {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.checkout);

  // update total price
  useEffect(() => {
    const updatedTotalPrice = calculateTotalPrice(cart);

    dispatch(updateTotalPrice(updatedTotalPrice));
  }, [dispatch, cart]);

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
                handleOnClick={ () => dispatch(removeItem(product.id)) }
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

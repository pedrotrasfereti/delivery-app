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
            <td>{ index + 1 }</td>
            <td>{ product.name }</td>
            <td>{ product.quantity }</td>
            <td>{ product.price }</td>
            <td>{ product.subTotal }</td>
            <td>
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

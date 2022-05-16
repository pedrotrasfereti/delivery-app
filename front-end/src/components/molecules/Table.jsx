import * as React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

/* Children */
import { Button, Label } from '../atoms';

/* State */
import { useDispatch } from 'react-redux';
import { updateProduct } from '../../redux/features/checkoutSlice';

function Table({ data }) {
  const dispatch = useDispatch();

  const removeItem = (product) => {
    dispatch(updateProduct({ ...product, quantity: 0 }));
  };

  return (
    <table>
      <thead>
        <tr>
          {
            data.header.map((heading) => {
              return (
                <td key={ uuid() }>
                  <Label>{ heading }</Label>
                </td>
              );
            })
          }
        </tr>
      </thead>
      <tbody>
          {
            data.body.map((product, index) => {
              return (
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
              );
            })
          }
      </tbody>
      <tfoot>
        <tr>
          {
            data.footer.map((value, index) => {
              if (index === 0) {
                return (
                  <td key={ uuid() }>
                    <Label>{ value }:</Label>
                  </td>
                );
              }

              return <td key={ uuid() }>{ value }</td>
            })
          }
        </tr>
      </tfoot>
    </table>
  );
}

Table.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.arrayOf(PropTypes.string),
    body: PropTypes.arrayOf(PropTypes.string),
    footer: PropTypes.arrayOf(PropTypes.string),
  }),
}.isRequired;

export default Table;

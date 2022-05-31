import React from 'react';
import PropTypes from 'prop-types';

export default function OrderTable({ data }) {
  return (
    <table>
      <thead>
        <tr>
          {
            data.header.map((heading) => (
              <td key={ heading }>
                <span>{ heading }</span>
              </td>
            ))
          }
        </tr>
      </thead>

      <tbody>
        {
          data.body.map(({ id, name, quantity, price, subTotal }, index) => (
            <tr key={ id }>
              <td
                data-testid={
                  `customer_order_details__element-order-table-item-number-${index}`
                }
              >
                { index + 1 }
              </td>
              <td
                data-testid={
                  `customer_order_details__element-order-table-name-${index}`
                }
              >
                { name }
              </td>
              <td
                data-testid={
                  `customer_order_details__element-order-table-quantity-${index}`
                }
              >
                { quantity }
              </td>
              <td
                data-testid={
                  `customer_order_details__element-order-table-unit-price-${index}`
                }
              >
                { String(Number(price).toFixed(2)).replace('.', ',') }
              </td>
              <td
                data-testid={
                  `customer_order_details__element-order-table-sub-total-${index}`
                }
              >
                { String(Number(subTotal).toFixed(2)).replace('.', ',') }
              </td>
            </tr>
          ))
        }
      </tbody>

      <tfoot>
        <tr>
          {
            data.footer.map((value, index) => {
              if (index === 0) {
                return (
                  <td key={ value }>
                    <span>
                      { value }
                      :
                      {' '}
                    </span>
                  </td>
                );
              }

              return (
                <td
                  data-testid="customer_order_details__element-order-total-price"
                  key={ value }
                >
                  { String(Number(value).toFixed(2)).replace('.', ',')}
                </td>
              );
            })
          }
        </tr>
      </tfoot>
    </table>
  );
}

OrderTable.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.arrayOf(PropTypes.string),
    body: PropTypes.arrayOf(PropTypes.string),
    footer: PropTypes.arrayOf(PropTypes.string),
  }),
}.isRequired;

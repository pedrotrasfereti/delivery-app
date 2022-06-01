import React from 'react';
import PropTypes from 'prop-types';

/* Utils */
import formatFloat from '../../../utils/formatFloat';

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
              <td>
                { index + 1 }
              </td>
              <td>
                { name }
              </td>
              <td>
                { quantity }
              </td>
              <td>
                { formatFloat(price) }
              </td>
              <td>
                { formatFloat(subTotal) }
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
                <td key={ value }>
                  { formatFloat(value) }
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

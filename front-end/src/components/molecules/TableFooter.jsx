import * as React from 'react';
import PropTypes from 'prop-types';

/* Children */
import { Label } from '../atoms';

function TableFooter({ data }) {
  return (
    <tfoot>
      <tr>
        {
          data.map((value, index) => {
            if (index === 0) {
              return (
                <td key={ value }>
                  <Label>
                    { String(value).replace('.', ',') }
                    :
                  </Label>
                </td>
              );
            }

            return (
              <td
                data-testid="customer_checkout__element-order-total-price"
                key={ value }
              >
                { value }
              </td>
            );
          })
        }
      </tr>
    </tfoot>
  );
}

TableFooter.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default TableFooter;

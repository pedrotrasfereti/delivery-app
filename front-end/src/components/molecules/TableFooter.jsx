import * as React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

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
                <td key={ uuid() }>
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
                key={ uuid() }
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

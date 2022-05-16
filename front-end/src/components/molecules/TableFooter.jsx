import * as React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

/* Children */
import { Label } from '../atoms';

function TableFooter() {
  return (
    <tfoot>
      <tr>
        {
          data.footer.map((value, index) => {
            if (index === 0) {
              return (
                <td key={ uuid() }>
                  <Label>
                    { value }
                    :
                  </Label>
                </td>
              );
            }

            return <td key={ uuid() }>{ value }</td>
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

import * as React from 'react';;
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

/* Children */
import { Label } from '../atoms';
import TableBody from './TableBody';

function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          {
            data.header.map((heading) => (
              <td key={ uuid() }>
                <Label>{ heading }</Label>
              </td>
            ))
          }
        </tr>
      </thead>

      <TableBody data={ data.body } />

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

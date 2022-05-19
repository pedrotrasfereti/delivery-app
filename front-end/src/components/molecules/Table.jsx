import * as React from 'react';
import PropTypes from 'prop-types';

/* Children */
import { Label } from '../atoms';
import TableBody from './TableBody';
import TableFooter from './TableFooter';

function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          {
            data.header.map((heading) => (
              <td key={ heading }>
                <Label>{ heading }</Label>
              </td>
            ))
          }
        </tr>
      </thead>

      <TableBody data={ data.body } />

      <TableFooter data={ data.footer } />
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

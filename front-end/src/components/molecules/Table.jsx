import * as React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

/* Children */
import { Label } from '../atoms';

function Table({ data }) {
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
            data.body.map((value, index) => {
              return (
                <tr key={ uuid() }>
                  <td>{ index + 1 }</td>
                  <td>{ value.name }</td>
                  <td>{ value.quantity }</td>
                  <td>{ value.price }</td>
                  <td>{ value.subTotal }</td>
                  <td>Remove Item</td>
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

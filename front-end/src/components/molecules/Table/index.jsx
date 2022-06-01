import React from 'react';
import PropTypes from 'prop-types';

/* Children */
import { Label } from '../../atoms';
import TableBody from '../TableBody';
import TableFooter from '../TableFooter';

/* Styled */
import Styled from './Styled';

export default function Table({ body, caption, cols, sum, deleteItem }) {
  return (
    <Styled>
      <caption>{ caption }</caption>

      <thead>
        <tr>
          <td id="item-column">
            <Label>Item</Label>
          </td>
          {
            cols.map((heading) => (
              <td
                id={ `${heading.toLowerCase()}-column` }
                key={ heading }
              >
                <Label>{ heading }</Label>
              </td>
            ))
          }
        </tr>
      </thead>

      <TableBody data={ body } deleteItem={ deleteItem } />

      <TableFooter sum={ sum } />
    </Styled>
  );
}

Table.propTypes = {
  body: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
    subTotal: PropTypes.string,
  })).isRequired,
  caption: PropTypes.string,
  cols: PropTypes.arrayOf(PropTypes.string).isRequired,
  deleteItem: PropTypes.bool,
  sum: PropTypes.string,
};

Table.defaultProps = {
  caption: '',
  deleteItem: false,
  sum: '',
};

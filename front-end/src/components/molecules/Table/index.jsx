import React from 'react';
import PropTypes from 'prop-types';

/* Children */
import { Label } from '../../atoms';
import TableBody from '../TableBody';
import TableFooter from '../TableFooter';

/* Styled */
import Styled from './Styled';

export default function Table({ data, deleteItem }) {
  return (
    <Styled>
      <caption>My order</caption>

      <thead>
        <tr>
            <td id="item-column">
              <Label>Item</Label>
            </td>
          {
            data.header.map((heading) => (
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

      <TableBody data={ data.body } deleteItem={ deleteItem } />

      <TableFooter data={ data.footer } />
    </Styled>
  );
}

Table.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.arrayOf(PropTypes.string),
    body: PropTypes.arrayOf(PropTypes.object),
    footer: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  deleteItem: PropTypes.bool,
};

Table.defaultProps = {
  deleteItem: false,
};

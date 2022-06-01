import React from 'react';
import PropTypes from 'prop-types';

/* Styled */
import Styled from './Styled';

export default function TableFooter({ data }) {
  return (
    <Styled>
      <tr>
        <td colSpan="100">
          <label htmlFor="table-footer__total-price">
            { data[0] }
            :
          </label>
          <span id="table-footer__total-price">
            $
            { data[1] }
          </span>
        </td>
      </tr>
    </Styled>
  );
}

TableFooter.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

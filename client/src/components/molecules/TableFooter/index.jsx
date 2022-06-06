import React from 'react';
import PropTypes from 'prop-types';

/* Styled */
import Styled from './Styled';

export default function TableFooter({ sum }) {
  return (
    <Styled>
      <tr>
        {
          sum === ''
            ? <td colSpan="100" />
            : (
              <td colSpan="100">
                <span className="Label">
                  Total:
                </span>
                <span className="Sum">
                  $
                  { sum }
                </span>
              </td>
            )
        }
      </tr>
    </Styled>
  );
}

TableFooter.propTypes = {
  sum: PropTypes.string.isRequired,
};

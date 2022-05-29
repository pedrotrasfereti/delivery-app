import * as React from 'react';
import PropTypes from 'prop-types';

/* Styled */
import { styled } from '../../stitches.config';

const StitchesComponent = styled('tbody', {
  '& tr td': {
    padding: '$3',
    textAlign: 'end',

    '& label': {
      fontFamily: '$sans',
      fontSize: '$3',
      fontWeight: '$5',
      marginRight: '$2',
      textTransform: 'uppercase',
      letterSpacing: '.05rem',

      '@bp3': {
        fontSize: '$2',
      },
    },

    '& span': {
      fontFamily: '$sans',
      fontSize: '$3',
      fontWeight: '$5',

      '@bp3': {
        fontSize: '$2',
      },
    },
  },
});

function TableFooter({ data }) {
  return (
    <StitchesComponent>
      <tr>
        <td colSpan="100">
          <label htmlFor="total-price">
            { data[0] }
            :
          </label>
          <span id="total-price">
            $
            { data[1] }
          </span>
        </td>
      </tr>
    </StitchesComponent>
  );
}

TableFooter.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default TableFooter;

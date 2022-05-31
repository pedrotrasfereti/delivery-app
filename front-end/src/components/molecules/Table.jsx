import * as React from 'react';
import PropTypes from 'prop-types';

/* Children */
import { Label } from '../atoms';
import TableBody from './TableBody';
import TableFooter from './TableFooter';

/* Styled */
import { styled } from '../../stitches.config';

const boxShadow = 'rgba(0, 0, 0, .08) 0px 4px 12px';

const StitchesComponent = styled('table', {
  backgroundColor: '$loContrast',
  border: '0',
  borderCollapse: 'collapse',
  borderRadius: '1rem',
  boxShadow,
  color: '$textDark',
  width: '62.5rem',

  '& caption': {
    backgroundColor: '$loContrast',
    borderRadius: '1rem 1rem 0 0',
    boxShadow,
    fontFamily: '$sans',
    fontSize: '$4',
    fontWeight: '$6',
    padding: '$3 0',
  },

  '& thead': {
    border: '0',
    borderRadius: '1rem',

    '& tr td': {
      backgroundColor: '$gray300',
      padding: '$2 $3',
      textAlign: 'center',

      '@bp1': {
        padding: '$1 $2',
      },
    },
  },

  // Hide Item Column
  '@bp3': {
    '& thead tr #item-column': {
      display: 'none',
    },
  },

  '@bp4': {
    background: 'none',
    boxShadow: 'none',
    width: '100%',

    '& thead': {
      borderRadius: '0',

      '& tr td label': {
        fontSize: '$1',
      },
    },

    '& caption': {
      background: 'none',
      borderRadius: '0',
      boxShadow: 'none',
    },
  },
});

function Table({ data }) {
  return (
    <StitchesComponent>
      <caption>My order</caption>

      <thead>
        <tr>
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

      <TableBody data={ data.body } />

      <TableFooter data={ data.footer } />
    </StitchesComponent>
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

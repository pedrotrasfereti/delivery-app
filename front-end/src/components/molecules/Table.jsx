import * as React from 'react';
import PropTypes from 'prop-types';

/* Children */
import { Label } from '../atoms';
import TableBody from './TableBody';
import TableFooter from './TableFooter';

/* Styled */
import { styled } from '../../stitches.config';

const StitchesComponent = styled('table', {
  backgroundColor: '$loContrast',
  border: '0',
  borderCollapse: 'collapse',
  borderRadius: '1rem',
  boxShadow:
    'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
  color: '$textDark',
  width: '70rem',

  '& caption': {
    backgroundColor: '$loContrast',
    borderRadius: '1rem 1rem 0 0',
    boxShadow:
      'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
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
              <td key={ heading }>
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

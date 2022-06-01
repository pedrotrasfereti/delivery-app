import { styled } from '../../../stitches.config';

export default styled('tbody', {
  '& tr': {
    borderBottom: '1px solid gainsboro',
    borderTop: '1px solid gainsboro',

    // Hover
    '&:hover td': {
      backgroundColor: 'hsl(215, 100%, 99%)',
    },

    // Text
    '& td': {
      backgroundColor: '$loContrast',
      fontFamily: '$sans',
      fontSize: '$3',
      fontWeight: '$3',
      textAlign: 'center',
      height: '4rem',
      padding: '0 $2',

      '@bp4': {
        fontSize: '$2',
        fontWeight: '$4',
      },
    },

    '& td.Bold': {
      fontWeight: '$4',
    },

    // Remove Item Button
    '& td button': {
      appearance: 'none',
      background: 'transparent',
      border: '0',
      color: '$quintenary',
      cursor: 'pointer',
      fontSize: '$5',
      outline: '0',
      padding: '0',

      '@bp4': {
        fontSize: '$4',
      },
    },

    // Remove Item Button Hover
    '& .TrashIconFill': {
      display: 'none',
    },

    '& td button:hover .TrashIcon': {
      display: 'none',
    },

    '& td button:hover .TrashIconFill': {
      display: 'block',
    },

    // Hide Item Column
    '@bp3': {
      '#item-column': {
        display: 'none',
      },
    },
  },
});

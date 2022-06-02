import { styled } from '../../../stitches.config';

const boxShadow = 'rgba(0, 0, 0, .08) 0px 4px 12px';

export default styled('table', {
  backgroundColor: '$loContrast',
  border: '0',
  borderCollapse: 'collapse',
  borderRadius: '1rem',
  boxShadow,
  color: '$textDark',
  width: '62.5rem',

  '& caption': {
    '& .Container': {
      alignItems: 'center',
      backgroundColor: '$loContrast',
      borderRadius: '1rem 1rem 0 0',
      boxShadow,
      display: 'flex',
      padding: '$3 0',

      '& .Caption': {
        fontFamily: '$sans',
        fontSize: '$4',
        fontWeight: '$6',
      },

      '& .Controls, .Labels': {
        display: 'flex',
        fontFamily: '$sans',
        fontSize: '$3',
        flex: '1',
        gap: '$3',
      },

      '& .Labels': {
        marginLeft: '3rem',

        '& .Label': {
          display: 'flex',
          gap: '$1',

          '& .TagIcon': {
            color: '$gray800',
            fontSize: '$4',
          },

          '& span': {
            color: '$textDark',
            fontFamily: '$sans',
            fontWeight: '$4',
          },
        },
      },

      '& .Controls': {
        marginRight: '3rem',
        justifyContent: 'flex-end',

        '& .Control': {
          appearance: 'none',
          backgroundColor: '$primary',
          border: '0',
          borderRadius: '$round',
          color: '$textLight',
          cursor: 'pointer',
          fontFamily: '$sans',
          fontWeight: '$5',
          padding: '.7rem 1rem',
          transition: '.3s',

          '&:disabled': {
            backgroundColor: '$secondary',
            cursor: 'default',
            opacity: '.8',
          },
        },
      },
    },
  },

  '& thead': {
    border: '0',
    borderRadius: '1rem',

    '& .Headings td': {
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

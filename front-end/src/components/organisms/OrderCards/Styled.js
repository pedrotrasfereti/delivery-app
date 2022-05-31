import { styled } from '../../../stitches.config';

export default styled('section', {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  padding: '0 $5',
  width: '100%',

  '& h2': {
    color: '$textDark',
    fontFamily: '$sans2',
    fontSize: '$6',
    fontWeight: '$5',
    textAlign: 'center',
  },

  '& .Container': {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    gap: '$5',
    width: '100%',

    '& .Timeline': {
      display: 'flex',
      flex: '1',
      flexFlow: 'column nowrap',
      gap: '$3',

      '& .Date': {
        appearance: 'none',
        alignItems: 'baseline',
        background: 'none',
        border: '0',
        cursor: 'pointer',
        display: 'flex',
        flexFlow: 'row nowrap',
        outline: '0',

        '& .Year': {
          color: '$textDark',
          fontFamily: '$sans2',
          fontSize: '$6',
          fontWeight: '$6',
          marginRight: 'auto',

          '@bp4': {
            fontSize: '$5',
          },

          '@bp3': {
            fontSize: '$4',
          },
        },

        '& .Month, & .Day': {
          color: '$gray600',
          fontFamily: '$sans',
          fontSize: '$4',
          fontWeight: '$3',

          '@bp4': {
            fontSize: '$3',
          },

          '@bp3': {
            fontSize: '$2',
            fontWeight: '$4',
          },
        },

        '& .Month': {
          margin: '0 $2 0 2rem',
        },

        // Hover
        '&:hover:not(.Selected) .Month, &:hover:not(.Selected) .Day': {
          color: '$gray700',
        },

        // Selected
        '&.Selected': {
          '& .Month, & .Day': {
            color: '$textDark',
          },

          '& .Month': {
            position: 'relative',

            '&::before': {
              content: '',
              position: 'absolute',
              display: 'block',
              background: '$secondary',
              height: '100%',
              width: '5px',
              top: '0',
              left: '-15px',
            },
          },
        },
      },
    },

    '& .VerticalRule': {
      backgroundColor: '$gray300',
      height: '100%',
      width: '1px',
    },

    '& .Orders': {
      alignItems: 'center',
      display: 'flex',
      flex: '3',
      flexFlow: 'row wrap',
      gap: '$5',
      justifyContent: 'center',

      '@bp4': {
        gap: '$4',
      },

      '@bp3': {
        gap: '$3',
      },
    },

    '@bp4': {
      gap: '$4',
    },

    '@bp3': {
      gap: '$3',
    },
  },

  '@bp4': {
    padding: '0 $4',
  },

  '@bp3': {
    padding: '0 $3',
  },
});

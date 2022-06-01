import { styled } from '../../../stitches.config';

const boxShadow = 'rgba(0, 0, 0, .08) 0px 4px 12px';

export default styled('button', {
  alignItems: 'center',
  appearance: 'none',
  backgroundColor: '$loContrast',
  border: '0',
  borderRadius: '$default',
  boxShadow,
  cursor: 'pointer',
  display: 'flex',
  height: '11rem',
  flex: '1',
  flexFlow: 'row wrap',
  justifyContent: 'space-around',
  minWidth: '9rem',
  outline: '0',
  padding: '$3',
  transition: 'flex ease .6s',

  '& h3': {
    color: '$textDark',
    fontFamily: '$sans2',
    fontSize: '$5',
    fontWeight: '$7',

    '@bp4': {
      fontSize: '$4',
    },

    '@bp3': {
      fontSize: '$3',
    },
  },

  '& .Status .Decor': {
    display: 'inline-block',
    backgroundColor: '$accent1',
    border: '0',
    borderRadius: '$round',
    boxShadow: 'hsl(166, 95%, 40%) 0px 0px 2px',
    height: '.5rem',
    marginBottom: '$1',
    marginRight: '$2',
    width: '.5rem',

    '@bp3': {
      height: '.4rem',
      marginBottom: '2px',
      marginRight: '4px',
      width: '.4rem',
    },
  },

  '& .Status, & .TotalPrice': {
    color: '$gray700',
    fontFamily: '$sans',
    fontSize: '$4',
    fontWeight: '$4',

    '@bp4': {
      fontSize: '$3',
    },

    '@bp3': {
      fontSize: '$2',
    },
  },

  // Hover
  '&:hover': {
    flex: '2',

    '& .OrderId': {
      color: '$primary',
    },
  },

  '@bp4': {
    height: '9rem',
    minWidth: '7rem',
    padding: '$2',
  },

  '@bp3': {
    height: '7rem',
    padding: '$1',
  },
});

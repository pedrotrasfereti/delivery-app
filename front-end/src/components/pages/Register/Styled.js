import { styled } from '../../../stitches.config';

export const ContentWrapper = styled('div', {
  boxShadow: '0 0 120px 10px hsla(215, 0%, 20%, .5)',
  display: 'flex',
  flexFlow: 'column nowrap',
  gap: '$4',
  padding: '$5 $6',
  position: 'relative',
  zIndex: '$1',

  '&>h1': {
    color: '$textDark',
    fontFamily: '$sans2',
    fontSize: '$7',
    fontWeight: '$7',
  },

  // Breakpoints
  '@bp4': {
    padding: '$5 $4',
  },
  '@bp3': {
    padding: '$4',

    '&>h1': {
      fontSize: '$6',
    },
  },
});

export const DecorOne = styled('div', {
  alignSelf: 'flex-end',
  backgroundColor: '$primary',
  padding: 'calc($3 + 15px)',

  '@bp3': {
    padding: '$3',
  },
});

export const DecorTwo = styled('div', {
  alignSelf: 'flex-start',
  backgroundColor: '$quaternary',
  padding: 'calc($4 - 10px)',
});

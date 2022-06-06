import { styled } from '../../../stitches.config';

export const ContentWrapper = styled('div', {
  boxShadow: '0 0 120px 10px hsla(215, 0%, 20%, .5)',
  display: 'flex',
  flexFlow: 'column nowrap',
  gap: '$4',
  padding: '$5 $7',
  position: 'relative',
  zIndex: '$1',

  '&>.form-content_headings': {
    '&>h1': {
      color: '$textDark',
      fontFamily: '$sans2',
      fontSize: '$7',
      fontWeight: '$7',
    },

    '&>h2': {
      color: '$gray500',
      fontFamily: '$sans',
      fontSize: '$3',
      fontWeight: '$5',
      marginTop: '$2',
    },
  },

  // Breakpoints
  '@bp4': {
    padding: '$5 $4',
  },
  '@bp3': {
    padding: '$4',

    '&>.form-content_headings': {
      '&>h1': {
        fontSize: '$6',
      },
    },
  },
});

export const DecorOne = styled('div', {
  alignSelf: 'flex-end',
  background: '$accent1',
  padding: '$4',

  '@bp3': {
    padding: '$3',
  },
});

export const DecorTwo = styled('div', {
  alignSelf: 'flex-start',
  background: '$accent2',
  padding: 'calc($3 + 10px)',
});

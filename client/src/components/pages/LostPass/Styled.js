import { styled } from '../../../stitches.config';

export const ContentWrapper = styled('div', {
  boxShadow: '0 0 120px 10px hsla(215, 0%, 20%, .5)',
  display: 'flex',
  flexFlow: 'column nowrap',
  gap: '$4',
  padding: '$6 $5',
  position: 'relative',
  zIndex: '$1',

  '&>.form-content_headings': {
    '&>h1': {
      color: '$textDark',
      fontFamily: '$sans2',
      fontSize: '$6',
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

  '&>form': {
    display: 'flex',
    flexFlow: 'column',
    gap: '$4',

    '& label': {
      display: 'flex',
      flexFlow: 'column',
      width: '100%',
      gap: '$2',
    },
  },

  '&>.form__link-message': {
    display: 'flex',
    flexFlow: 'row',
    gap: '$2',
    alignItems: 'center',
    color: '$textDark',
    fontWeight: '$5',
    fontFamily: '$sans',
  },
});

export const DecorOne = styled('div', {
  alignSelf: 'flex-start',
  background: '$secondary',
  padding: 'calc($3 + 10px)',
});

export const DecorTwo = styled('div', {
  alignSelf: 'flex-end',
  background: '$senary',
  padding: '$4',

  '@bp3': {
    padding: '$3',
  },
});

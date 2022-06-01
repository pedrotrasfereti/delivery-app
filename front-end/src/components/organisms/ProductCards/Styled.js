import { styled } from '../../../stitches.config';

export default styled('main', {
  '& h2': {
    color: '$textDark',
    fontFamily: '$sans2',
    fontSize: '$6',
    fontWeight: '$5',
    textAlign: 'center',
  },

  '& .Container': {
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'row wrap',
    gap: '$3',
    justifyContent: 'center',
    marginTop: '2rem',

    '@bp0': {
      gap: '$2',
    },
  },
});

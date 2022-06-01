import { styled } from '../../../stitches.config';

export default styled('tbody', {
  '& tr td': {
    padding: '$3',
    textAlign: 'end',

    '& .Label': {
      fontFamily: '$sans',
      fontSize: '$3',
      fontWeight: '$5',
      marginRight: '$2',
      textTransform: 'uppercase',
      letterSpacing: '.05rem',

      '@bp3': {
        fontSize: '$2',
      },
    },

    '& .Sum': {
      fontFamily: '$sans',
      fontSize: '$3',
      fontWeight: '$5',

      '@bp3': {
        fontSize: '$2',
      },
    },
  },
});

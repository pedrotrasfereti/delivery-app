import { styled } from '../../../stitches.config';

export default styled('tbody', {
  '& tr td': {
    padding: '$3',
    textAlign: 'end',

    '& label': {
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

    '& span': {
      fontFamily: '$sans',
      fontSize: '$3',
      fontWeight: '$5',

      '@bp3': {
        fontSize: '$2',
      },
    },
  },
});

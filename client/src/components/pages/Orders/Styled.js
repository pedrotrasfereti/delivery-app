import { styled } from '../../../stitches.config';

export default styled('main', {
  alignItems: 'center',
  display: 'flex',
  flexFlow: 'column nowrap',

  '& .Empty': {
    margin: 'auto 0',

    '& h2': {
      color: '$gray700',
      fontFamily: '$sans',
      fontSize: '$5',
      fontWeight: '$3',

      '@bp3': {
        fontSize: '$4',
      },
    },
  },
});

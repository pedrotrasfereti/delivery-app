import { styled } from '../../../stitches.config';

export default styled('div', {
  padding: '$2',

  '&>.Icon': {
    fill: '$error',
    fontSize: '$2',
    marginRight: '$1',
    position: 'relative',
    top: '1.5px',
  },

  '&>span': {
    color: '$error',
    fontFamily: '$sans',
    fontSize: '$2',
    fontWeight: '$5',
  },

  variants: {
    box: {
      true: {
        display: 'flex',
        alignItems: 'center',

        '&>.Icon': {
          fill: '$textLight',
          fontSize: '$4',
          top: '0',
          marginRight: 'calc($2 + 3px)',
        },
        '&>span': {
          color: '$loContrast',
          fontSize: '$2',
        },
      },
    },
  },
});

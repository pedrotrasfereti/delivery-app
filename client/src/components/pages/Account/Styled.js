import { styled } from '../../../stitches.config';

export default styled('main', {
  alignItems: 'center',
  display: 'flex',
  flexFlow: 'column nowrap',
  gap: '$3',

  '& header': {
    alignItems: 'center',
    display: 'flex',
    flexFlow: 'inherit',
    gap: '$3',

    '& .ImageContainer': {
      border: '0',
      borderRadius: '$round',
      height: '4rem',
      objectFit: 'cover',
      width: '4rem',

      '& img': {
        border: '0',
        borderRadius: '$round',
        width: '100%',
      },
    },

    '& h2': {
      color: '$textDark',
      fontFamily: '$sans2',
      fontSize: '$5',
      fontWeight: '$6',

      '@bp3': {
        fontSize: '$4',
      },
    },

    '& span': {
      color: '$gray700',
      fontFamily: '$sans2',
      fontSize: '$3',
      fontWeight: '$4',

      '@bp3': {
        fontSize: '$2',
      },
    },
  },

  '& .Links': {
    alignItems: 'center',
    color: '$primary',
    display: 'flex',
    flexFlow: 'column nowrap',
    gap: '$3',
  },
});

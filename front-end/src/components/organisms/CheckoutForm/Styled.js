import { styled } from '../../../stitches.config';

export default styled('form', {
  alignItems: 'center',
  display: 'flex',
  flexFlow: 'row wrap',
  gap: '$3',

  '& .InputGroup': {
    display: 'flex',
    gap: '$3',
    maxWidth: '32.5rem',

    '& input:first-of-type': {
      flex: '2',
    },

    '& input:last-of-type': {
      flex: '1',
    },
  },

  '@bp4': {
    flexFlow: 'column nowrap',
    gap: '$4',

    '& .InputGroup': {
      gap: '$2',
      width: '17.15rem',
    },
  },
});

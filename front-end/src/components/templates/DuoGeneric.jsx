import { styled } from '../../stitches.config';

const DuoGeneric = styled('main', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: '1fr',
  minHeight: '100vh',
  maxHeight: '110vh',

  '@bp3': {
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'repeat(2, 1fr)',
  },
});

export default DuoGeneric;

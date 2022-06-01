import { styled } from '../../stitches.config';

export default styled('main', {
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

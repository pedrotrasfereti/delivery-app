import { styled } from '../../stitches.config';

const DuoGeneric = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: '$sectionMinHeight',
  width: '100%',

  '@bp3': {
    gridTemplateColumns: '1fr',
    gridTemplateRows: '40vh 100%',
  },
});

export default DuoGeneric;

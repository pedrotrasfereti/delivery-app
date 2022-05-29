import { styled } from '../../stitches.config';

const ClassicLayout = styled('div', {
  display: 'flex',
  minHeight: '100vh',

  // space between main and header
  paddingTop: '4.5rem',

  '& main': {
    backgroundColor: '$gray100',
    padding: '$4 0 $6',
    position: 'relative',
    width: '100%',
    zIndex: '0',
  },

  '@bp3': {
    // space between main and icon bar menu
    paddingBottom: '$5',
  },
});

export default ClassicLayout;

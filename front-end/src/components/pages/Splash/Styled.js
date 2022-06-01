import { styled } from '@stitches/react';

export default styled('main', {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  minHeight: '100vh',

  '& .Logo': {
    opacity: '.4',
    width: '$5',
  },
});

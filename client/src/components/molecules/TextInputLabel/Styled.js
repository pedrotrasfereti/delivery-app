import { styled } from '../../../stitches.config';

export default styled('div', {
  display: 'flex',
  flexFlow: 'column nowrap',
  gap: '$2',

  '&>input': {
    display: 'block',
  },
});

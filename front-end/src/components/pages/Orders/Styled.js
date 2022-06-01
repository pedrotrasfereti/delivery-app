import { styled } from '../../../stitches.config';

export default styled('main', {
  alignItems: 'center',
  display: 'flex',
  flexFlow: 'column nowrap',

  '& .Empty': {
    color: '$textDark',
    fontFamily: '$sans2',
    fontSize: '$4',
    fontWeight: '$1',
    padding: '$5 0',
  },
});

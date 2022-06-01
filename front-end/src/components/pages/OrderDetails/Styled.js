import { styled } from '../../../stitches.config';

export default styled('main', {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  padding: '0 $5',

  '& h2': {
    color: '$textDark',
    fontFamily: '$sans2',
    fontSize: '$6',
    fontWeight: '$5',
    textAlign: 'center',
  },
});

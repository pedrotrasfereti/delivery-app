import { styled } from '../../../stitches.config';

export default styled('button', {
  alignItems: 'center',
  appearance: 'none',
  background: 'linear-gradient(333deg, rgba(102,51,153,1) 0%, rgba(51,0,102,1) 100%)',
  bottom: '15px',
  border: '0',
  borderRadius: '$default',
  display: 'flex',
  justifyContent: 'space-around',
  padding: '15px 10px',
  position: 'fixed',
  transition: 'ease .3s',
  right: '15px',
  width: '140px',

  // Text
  '& span': {
    color: '$textLight',
    fontFamily: '$sans2',
    fontSize: '18px',
    fontWeight: '$5',
  },

  // States
  '&:hover:not(:disabled)': {
    borderRadius: '2.3rem',
    cursor: 'pointer',
  },

  '&:disabled': {
    opacity: '.9',
  },

  '@bp3': {
  },
});

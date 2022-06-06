/* Assets */
import { ExpandLess, ExpandMore } from '../../../assets';

import { styled } from '../../../stitches.config';

export default styled('select', {
  appearance: 'none',
  backgroundColor: '$loContrast',
  backgroundImage: `url(${ExpandMore})`,
  backgroundPosition: '95% 50%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '25px',
  border: '0',
  borderRadius: '$default',
  boxShadow:
    'rgba(0, 0, 0, 0.16) 0px 1px 4px',
  color: '$textDark',
  fontFamily: '$sans',
  fontSize: '$3',
  fontWeight: '$4',
  padding: '$3',
  width: '17rem',
  '-moz-appearance': 'none', /* Firefox */
  '-webkit-appearance': 'none', /* Safari and Chrome */

  '&:focus': {
    boxShadow:
      '0 0 0 .15rem rgba(5, 108, 249, .5)',
    backgroundImage: `url(${ExpandLess})`,
  },
});

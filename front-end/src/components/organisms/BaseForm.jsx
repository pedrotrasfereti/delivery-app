/* Styles */
import { styled } from '../../stitches.config';

const BaseForm = styled('form', {
  display: 'flex',
  flexFlow: 'column nowrap',
  gap: '$4',

  '&>.ButtonGroup': {
    display: 'flex',
    flexFlow: 'column nowrap',
    gap: '$3',

    '&>.LinkMessage': {
      color: '$textDark',
      fontFamily: '$sans',
      fontSize: '$2',
      fontWeight: '$5',
      display: 'flex',
      flexFlow: 'row nowrap',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '$1',
    },
  },
});

export default BaseForm;

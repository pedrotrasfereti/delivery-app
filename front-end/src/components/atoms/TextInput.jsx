import { styled } from '../../stitches.config';

const TextInput = styled('input', {
  borderBottom: '1px solid $gray400',
  borderRadius: '$default',
  boxShadow:
    'inset 0 1px 2px rgba(0, 0, 0, .39),0 -1px 1px #fff, 0 1px 0 #fff',
  caretColor: '$hiContrast',
  color: '$hiContrast',
  fontFamily: '$sans',
  fontSize: '$3',
  fontWeight: '$4',
  height: '2.5rem',
  lineHeight: '$default',
  padding: '$btnPadding',

  '&:focus': {
    boxShadow: '0 0 0 .15rem rgba(5, 108, 249, .5)',
    outline: '0',
  },
});

export default TextInput;

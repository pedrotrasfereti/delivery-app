import * as React from 'react';
import PropTypes from 'prop-types';

/* Styles */
import { styled } from '../../stitches.config';

const StitchesComponent = styled('button', {
  backgroundColor: '$buttonPrimary',
  border: 'none',
  borderRadius: '$default',
  color: '$textLight',
  cursor: 'pointer',
  fontFamily: '$sans',
  fontSize: '$3',
  fontWeight: '$5',
  lineHeight: '$default',
  transition: '$default',
  padding: '$btnPadding',
  textAlign: 'center',
  userSelect: 'none',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',

  '&:hover': {
    filter: 'brightness(92%)',
  },

  variants: {
    inactive: {
      true: {
        backgroundColor: '$tertiaryLight',
        cursor: 'default',
      },
    },
    link: {
      true: {
        padding: '0',
        background: 'transparent',
        '&>a': {
          color: '$tertiary',
          fontFamily: '$sans',
          fontSize: '$2',
          fontWeight: '$6',
        },
        '&:hover>a': {
          textDecorationLine: 'underline',
        },
      },
    },
  },
});

function Button({
  id,
  type,
  dataTestId,
  disabled,
  link,
  handleOnClick,
  children,
}) {
  return (
    <StitchesComponent
      id={ id }
      type={ type }
      data-testid={ dataTestId }
      disabled={ disabled }
      inactive={ disabled }
      link={ link }
      onClick={ handleOnClick }
    >
      { children }
    </StitchesComponent>
  );
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dataTestId: PropTypes.string,
  disabled: PropTypes.bool,
  link: PropTypes.bool,
  handleOnClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Button.defaultProps = {
  dataTestId: '',
  disabled: false,
  link: false,
  handleOnClick: () => null,
  children: '',
};

export default Button;

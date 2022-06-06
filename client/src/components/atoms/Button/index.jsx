import React from 'react';
import PropTypes from 'prop-types';

/* Styles */
import Styled from './Styled';

export default function Button({
  id,
  type,
  dataTestId,
  disabled,
  link,
  handleOnClick,
  children,
}) {
  return (
    <Styled
      id={ id }
      type={ type }
      data-testid={ dataTestId }
      disabled={ disabled }
      inactive={ disabled }
      link={ link }
      onClick={ handleOnClick }
    >
      { children }
    </Styled>
  );
}

Button.propTypes = {
  id: PropTypes.string,
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
  id: '',
  dataTestId: '',
  disabled: false,
  link: false,
  handleOnClick: () => null,
  children: '',
};

import React from 'react';
import PropTypes from 'prop-types';

/* Styles */
import Styled from './Styled';

export default function Select({ name, value, handleOnChange, children }) {
  return (
    <div>
      <Styled
        name={ name }
        value={ value }
        onChange={ handleOnChange }
      >
        { children }
      </Styled>
    </div>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Select.defaultProps = {
  handleOnChange: () => null,
};

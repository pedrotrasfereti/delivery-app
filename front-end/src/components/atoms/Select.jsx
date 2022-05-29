import React from 'react';
import PropTypes from 'prop-types';

/* Styles */
import { styled } from '../../stitches.config';

const StitchesComponent = styled('select', {
  background: '$loContrast',
  border: '0',
  borderRadius: '$default',
  padding: '$3',
  boxShadow:
    'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
  width: '17rem',
});

export default function Select({ name, value, handleOnChange, children }) {
  return (
    <div>
      <StitchesComponent
        name={ name }
        value={ value }
        onChange={ handleOnChange }
      >
        { children }
      </StitchesComponent>
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

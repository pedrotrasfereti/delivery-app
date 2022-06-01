import React from 'react';
import PropTypes from 'prop-types';

/* Styles */
import Styled from './Styled';

export default function Control({ dataTestId, handleOnClick, operation }) {
  return (
    <Styled
      data-testid={ dataTestId }
      onClick={ handleOnClick }
      operation={ operation }
    >
      <span>
        { operation === 'add' ? '+' : '-' }
      </span>
    </Styled>
  );
}

Control.propTypes = {
  operation: PropTypes.oneOf(['add', 'subtract']),
  dataTestId: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

Control.defaultProps = {
  operation: 'add',
};

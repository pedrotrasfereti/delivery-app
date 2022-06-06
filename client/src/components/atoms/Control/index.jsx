import React from 'react';
import PropTypes from 'prop-types';

/* Styles */
import Styled from './Styled';

export default function Control({ handleOnClick, operation }) {
  return (
    <Styled
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
  handleOnClick: PropTypes.func.isRequired,
};

Control.defaultProps = {
  operation: 'add',
};

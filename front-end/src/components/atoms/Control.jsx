import * as React from 'react';
import PropTypes from 'prop-types';

/* Styles */
import { styled } from '../../stitches.config';

const StitchesComponent = styled('button', {
  // alignItems: 'center',
  // cursor: 'pointer',
  // border: '0',
  // borderRadius: '$default',
  // display: 'flex',
  // fontFamily: '$sans2',
  // fontSize: '$4',
  // fontWeight: '$5',
  // justifyContent: 'center',
  // height: '25px',
  // outline: '0',
  // width: '25px',

  // '&:hover': {
  //   filter: 'brightness(95%)',
  // },

  // '&:active': {
  //   filter: 'brightness(85%)',
  // },

  // variants: {
  //   operation: {
  //     add: {
  //       backgroundColor: '$accent1',
  //       color: '$textLight',
  //     },

  //     subtract: {
  //       backgroundColor: '$gray300',
  //       color: '$textDark',
  //     },
  //   },
  // },
});

function Control({ dataTestId, handleOnClick, operation }) {
  return (
    <StitchesComponent
      data-testid={ dataTestId }
      onClick={ handleOnClick }
      operation={ operation }
    >
      <span>
        {/* not production code */}
        { operation === 'add' ? 'Add' : 'Remove' }
        {/* not production code */}
      </span>
    </StitchesComponent>
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

export default Control;

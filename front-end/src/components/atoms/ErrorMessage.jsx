import * as React from 'react';
import PropTypes from 'prop-types';

/* Assets */
import {
  BsExclamationCircleFill as AlertIconFill,
  BsExclamationCircle as AlertIcon,
} from 'react-icons/bs';

/* Styles */
import { styled } from '../../stitches.config';

const StitchesComponent = styled('div', {
  padding: '$2',

  '&>.Icon': {
    fill: '$error',
    fontSize: '$2',
    marginRight: '$1',
    position: 'relative',
    top: '1.5px',
  },

  '&>span': {
    color: '$error',
    fontFamily: '$sans',
    fontSize: '$2',
    fontWeight: '$5',
  },

  variants: {
    box: {
      true: {
        display: 'flex',
        alignItems: 'center',

        '&>.Icon': {
          fill: '$white',
          fontSize: '$4',
          top: '0',
          marginRight: 'calc($2 + 3px)',
        },
        '&>span': {
          color: '$loContrast',
          fontSize: '$2',
        },
      },
    },
  },
});

function ErrorMessage({ id, dataTestId, message, box }) {
  return (
    <StitchesComponent id="error-message-wrapper" box={ box }>
      {
        box ? (
          <AlertIcon className="Icon" />
        ) : (
          <AlertIconFill className="Icon" />
        )
      }
      <span id={ id } data-testid={ dataTestId }>
        { message }
      </span>
    </StitchesComponent>
  );
}

/* Prop types */
ErrorMessage.propTypes = {
  id: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  box: PropTypes.bool.isRequired,
};

export default ErrorMessage;

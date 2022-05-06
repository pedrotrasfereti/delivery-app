import * as React from 'react';
import PropTypes from 'prop-types';

/* Assets */
import { BsExclamationCircleFill as AlertIcon } from 'react-icons/bs';

/* Styles */
import { styled } from '../../stitches.config';

const Container = styled('div', {
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
        '&>.Icon': {
          fill: '$white',
        },
        '&>span': {
          color: '$white',
        },
      },
    },
  },
});

function ErrorMessage({ id, dataTestId, message }) {
  return (
    <Container id="error-message-wrapper">
      <AlertIcon className="Icon" />
      <span id={ id } data-testid={ dataTestId }>
        { message }
      </span>
    </Container>
  );
}

/* Prop types */
ErrorMessage.propTypes = {
  id: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;

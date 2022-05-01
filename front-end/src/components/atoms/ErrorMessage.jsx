import * as React from 'react';
import PropTypes from 'prop-types';

/* Assets */
import { BsExclamationCircleFill as AlertIcon } from 'react-icons/bs';

/* Styles */
import { styled } from '../../stitches.config';

const ErrorMessageWrapper = styled('div', {
  alignItems: 'center',
  display: 'flex',
  gap: '.25rem',
  height: '2rem',
  '&>.Icon': {
    fill: '$error',
    fontSize: '$2',
  },
  '&>span': {
    fontFamily: '$sans',
    fontSize: '$2',
    fontWeight: '$5',
    color: '$error',
  },
});

function ErrorMessage({ id, dataTestId, message }) {
  return (
    <ErrorMessageWrapper>
      <AlertIcon className="Icon" />
      <span id={ id } data-testid={ dataTestId }>
        { message }
      </span>
    </ErrorMessageWrapper>
  );
}

/* Prop types */
ErrorMessage.propTypes = {
  id: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;

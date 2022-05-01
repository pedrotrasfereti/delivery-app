import * as React from 'react';
import PropTypes from 'prop-types';

/* Assets */
import { BsExclamationCircleFill as AlertIcon } from 'react-icons/bs';

function ErrorMessage({ id, dataTestId, message }) {
  return (
    <div className="ErrorMessage">
      <AlertIcon className="Icon" />
      <span id={ id } data-testid={ dataTestId }>
        { message }
      </span>
    </div>
  );
}

/* Prop types */
ErrorMessage.propTypes = {
  id: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;

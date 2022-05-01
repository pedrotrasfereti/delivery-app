import * as React from 'react';
import PropTypes from 'prop-types';

function ErrorMessage({ id, dataTestId, message }) {
  return (
    <div className="ErrorMessage">
      <div className="Icon" />
      <span id={ id } dataTestId={ dataTestId }>
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

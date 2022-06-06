import React from 'react';
import PropTypes from 'prop-types';

/* Assets */
import {
  BsExclamationCircleFill as AlertIconFill,
  BsExclamationCircle as AlertIcon,
} from 'react-icons/bs';

/* Styles */
import Styled from './Styled';

export default function ErrorMessage({ id, dataTestId, message, box }) {
  return (
    <Styled box={ box }>
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
    </Styled>
  );
}

/* Prop types */
ErrorMessage.propTypes = {
  id: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  box: PropTypes.bool,
};

ErrorMessage.defaultProps = {
  box: false,
};

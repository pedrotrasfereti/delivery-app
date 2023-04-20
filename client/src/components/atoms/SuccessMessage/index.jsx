import React from 'react';
import PropTypes from 'prop-types';

import Styled from './Styled';

import {
  BsCheckCircleFill as CheckIconFill,
  BsCheckCircle as CheckIcon,
} from 'react-icons/bs';

const SuccessMessage = ({id, message, box}) => {
  return (
    <Styled box={ box }>
      {
        box ? (
          <CheckIcon className="Icon" />
        ) : (
          <CheckIconFill className="Icon" />
        )
      }
      <span id={ id }>
        { message }
      </span>
    </Styled>
  )
}

SuccessMessage.propTypes = {
  id: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  box: PropTypes.bool,
};

SuccessMessage.defaultProps = {
  box: false,
};

export default SuccessMessage;


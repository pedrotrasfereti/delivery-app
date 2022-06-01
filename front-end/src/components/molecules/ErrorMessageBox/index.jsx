import React from 'react';
import PropTypes from 'prop-types';

/* Children */
import { ErrorMessage } from '../../atoms';

/* Styles */
import Styled from './Styled';

export default function ErrorMessageBox({ id, dataTestId, message }) {
  return (
    <Styled>
      <ErrorMessage
        id={ id }
        dataTestId={ dataTestId }
        message={ message }
        box
      />
    </Styled>
  );
}

ErrorMessageBox.propTypes = {
  id: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

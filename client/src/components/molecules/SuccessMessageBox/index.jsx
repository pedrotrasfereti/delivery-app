import React from 'react';
import PropTypes from 'prop-types';

/* Children */
import { SuccessMessage } from '../../atoms';

/* Styles */
import Styled from './Styled';

export default function SuccessMessageBox({ id, message }) {
  return (
    <Styled>
      <SuccessMessage
        id={ id }
        message={ message }
        box
      />
    </Styled>
  );
}

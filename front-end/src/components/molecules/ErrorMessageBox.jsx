import * as React from 'react';
import PropTypes from 'prop-types';

/* Children */
import { ErrorMessage } from '../atoms';

/* Styles */
import { styled } from '../../stitches.config';

const StitchesComponent = styled('div', {
  display: 'flex',
  flexFlow: 'column nowrap',
  gap: '$2',

  '&>input': {
    display: 'block',
  },
});

function ErrorMessageBox({ id, dataTestId, message }) {
  return (
    <StitchesComponent>
      <ErrorMessage
        id={ id }
        dataTestId={ dataTestId }
        message={ message }
        box
      />
    </StitchesComponent>
  );
}

/* Prop types */
ErrorMessageBox.propTypes = {
  id: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default ErrorMessageBox;

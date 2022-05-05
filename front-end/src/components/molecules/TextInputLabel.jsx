import * as React from 'react';
import PropTypes from 'prop-types';

/* Children */
import { TextInput, Label } from '../atoms';

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

function TextInputLabel({
  id,
  type,
  dataTestId,
  label,
  placeholder,
  value,
  handleOnChange,
  handleOnBlur,
}) {
  return (
    <StitchesComponent>
      <Label htmlFor={ id }>{ label }</Label>

      <TextInput
        id={ id }
        type={ type }
        data-testid={ dataTestId }
        placeholder={ placeholder }
        value={ value }
        onChange={ (e) => handleOnChange(e.target.value) }
        onBlur={ handleOnBlur }
      />
    </StitchesComponent>
  );
}

/* Prop types */
TextInputLabel.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleOnBlur: PropTypes.func,
};

TextInputLabel.defaultProps = {
  handleOnBlur: () => null,
};

export default TextInputLabel;

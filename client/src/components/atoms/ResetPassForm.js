import React, { useState } from 'react';
import Label from './Label';
import TextInput from './TextInput';
import Button from './Button';
import emailRegex from '../../utils/constants/emailRegex';

const ResetPassForm = () => {
  const [email, setEmail] = useState('');
  const [invalidMail, setInvalidMail] = useState(true);

  function submitResetPass(event) {
    event.preventDefault();
  }

  function onChangeEmailInput(target) {
    setEmail(target.value);
    const testEmail = emailRegex.test(email);

    if (testEmail) setInvalidMail(false);
  }

  return (
    <form>
      <Label>
        Email address:
        <TextInput
          type="text"
          value={ email }
          onChange={ ({ target }) => onChangeEmailInput(target) }
        />
      </Label>
      <Button
        type="submit"
        handleOnClick={ ({ target }) => submitResetPass(target) }
        disabled={ invalidMail }
      >
        Enviar
      </Button>
    </form>
  );
};

export default ResetPassForm;

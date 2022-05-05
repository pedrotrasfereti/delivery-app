import {
  validateEmail,
  validateMatch,
  validateName,
  validatePassword,
} from '.';

const validateAll = (
  email = 'example@email.com',
  name = 'Adolph Blaine Charles',
  password1 = 'supersecret123',
  password2 = 'supersecret123',
) => {
  const validations = [
    Boolean(email),
    Boolean(name),
    Boolean(password1),
    Boolean(password2),
    validateEmail(email),
    validateName(name),
    validatePassword(password1),
    validateMatch(password1, password2),
  ];

  validations.every((v) => v === true);
};

export default validateAll;

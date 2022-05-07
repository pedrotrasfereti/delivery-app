const EMAIL_REGEX = /^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/i;

const validateEmail = (email) => EMAIL_REGEX.test(email);

export default validateEmail;

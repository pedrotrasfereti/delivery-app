const EMAIL_REGEX = /\S+@\S+\.\S+/;

const validateEmail = (email) => EMAIL_REGEX.test(email);

export default validateEmail;

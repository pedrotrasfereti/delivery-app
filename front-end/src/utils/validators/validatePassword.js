const PASSWORD_REGEX = /^[A-Za-z0-9\s$&+,:;=?@#|'<>.^*()%!-]{6,}$/;

const validatePassword = (password) => PASSWORD_REGEX.test(password);

export default validatePassword;

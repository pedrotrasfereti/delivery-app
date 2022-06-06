const NAME_REGEX = /^[A-Za-z0-9\u00C0-\u00FF\s$&+,:;=?@#|'<>.^*()%!-]{12,}$/;

const validateName = (name) => NAME_REGEX.test(name);

export default validateName;

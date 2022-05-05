const EMAIL_REGEX = /^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;

const validateEmail = (email, callback) => {
  if (email && !EMAIL_REGEX.test(email)) {
    callback(true);
  } else {
    callback(false);
  }
};

export default validateEmail;

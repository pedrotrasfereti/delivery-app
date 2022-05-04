const validatePassword = (password, callback) => {
  const minLength = 6;

  if (password.length < minLength) {
    callback(true);
  } else {
    callback(false);
  }
};

export default validatePassword;

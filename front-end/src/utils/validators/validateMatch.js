const validateMatch = (password1, password2, callback) => {
  if (password1 !== password2) {
    callback(true);
  } else {
    callback(false);
  }
};

export default validateMatch;

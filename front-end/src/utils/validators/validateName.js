const validateName = (name, callback) => {
  const minLength = 12;

  if (name.length < minLength) {
    callback(true);
  } else {
    callback(false);
  }
};

export default validateName;

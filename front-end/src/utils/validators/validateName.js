const validateName = (name) => {
  const minLength = 12;

  return name.length >= minLength;
};

export default validateName;

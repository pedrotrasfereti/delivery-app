const resetPasswordUserData = {
  email: 'test@gmail.com',
  newPass: 'password',
};

const resetPassWithoutNewPass = {
  email: 'test@gmail.com',
};

const resetPassWithoutEmail = {
  newPass: 'password',
};

module.exports = {
  resetPasswordUserData,
  resetPassWithoutNewPass,
  resetPassWithoutEmail,
};

const messages = {
  name: {
    invalid: 'Name must be at least 12 characters long.',
  },
  email: {
    invalid: 'This email is invalid. Make sure it\'s written like example@email.com',
  },
  password: {
    invalid: 'Password must be at least 6 characters long.',
    mismatch: 'Passwords did not match.',
  },
  login: {
    notFound: 'Incorrect email or password.',
  },
  register: {
    conflict: 'Name or email is already associated to an account.',
  },
};

export default messages;

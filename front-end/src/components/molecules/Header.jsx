import * as React from 'react';

function Header({ children }) {
  return (
    <header>
      { children }
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Header.defaultProps = {
  children: '',
};

export default Header;

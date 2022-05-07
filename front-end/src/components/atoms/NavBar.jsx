import * as React from 'react';
import PropTypes from 'prop-types';

function NavBar({ children }) {
  return (
    <nav>
      { children }
    </nav>
  );
}

NavBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

NavBar.defaultProps = {
  children: '',
};

export default NavBar;

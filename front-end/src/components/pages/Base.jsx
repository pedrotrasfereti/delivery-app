import * as React from 'react';
import { Navigate } from 'react-router-dom';

function Base() {
  const shouldRedirect = true;

  return shouldRedirect && (<Navigate replace to="/login" />);
}

export default Base;

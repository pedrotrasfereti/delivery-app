import * as React from 'react';

/* Assets */
import { Packages } from '../../assets';

/* Children */
import Teaser from '../atoms/Teaser';
import DuoGeneric from '../templates';

function Register() {
  return (
    <DuoGeneric id="register-page">
      <div id="form-content">
        <h1 id="title">Sign Up to Deliveree</h1>

        {/* Here goes the sign up form */}
      </div>

      <Teaser id="teaser" image={ Packages } />
    </DuoGeneric>
  );
}

export default Register;

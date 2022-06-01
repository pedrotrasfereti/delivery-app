import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/* Assets */
import { Logo } from '../../../assets';

/* Utils */
import LocalStorageMethods from '../../../utils/localStorage';

/* Styles */
import Styled from './Styled';

export default function Splash() {
  const navigate = useNavigate();

  // Redirect
  useEffect(() => {
    const user = LocalStorageMethods.getParsedItem('user');

    if (user) {
      if (user.role === 'customer') {
        navigate('/customer/products');
      } else {
        navigate('/seller/orders');
      }
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <Styled>
      <img src={ Logo } alt="Logo" className="Logo" />
    </Styled>
  );
}

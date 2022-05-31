import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/* Styles */
import { styled } from '@stitches/react';

/* Assets */
import { Logo } from '../../assets';

/* Utils */
import LocalStorageMethods from '../../utils/localStorage';

const Styled = styled('main', {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  minHeight: '100vh',

  '& .Logo': {
    opacity: '.4',
    width: '$5',
  },
});

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

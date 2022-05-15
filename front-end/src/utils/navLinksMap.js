import * as React from 'react';

/* Assets */
import {
  BsFillBagFill as BagIcon,
  BsFillBasketFill as BasketIcon,
  BsDoorClosedFill as DoorClosedIcon,
  BsPersonFill as PersonIcon,
} from 'react-icons/bs';

function navLinksMap(username) {
  return ({
    '/customer/products': [
      {
        dataTestId: 'customer_products__element-navbar-link-products',
        name: 'Products',
        to: '/customer/products',
        icon: () => <BasketIcon className="Icon" />,
      },
      {
        dataTestId: 'customer_products__element-navbar-link-orders',
        name: 'My orders',
        to: '/',
        icon: () => <BagIcon className="Icon" />,
      },
      {
        dataTestId: 'customer_products__element-navbar-user-full-name',
        name: username,
        to: '/',
        icon: () => <PersonIcon className="Icon" />,
      },
      {
        dataTestId: 'customer_products__element-navbar-link-logout',
        name: 'Logout',
        to: '/login',
        icon: () => <DoorClosedIcon className="Icon" />,
      },
    ],
  });
}

export default navLinksMap;

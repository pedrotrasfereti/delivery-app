/* Assets */
import {
  BsFillBagFill as BagIcon,
  BsDoorClosedFill as DoorClosedIcon,
  BsPersonFill as PersonIcon,
} from 'react-icons/bs';

import {
  MdReceipt as ReceiptIcon,
} from 'react-icons/md';

export default function navLinksMap(username) {
  return ({
    customer: [
      {
        dataTestId: 'customer_products__element-navbar-link-products',
        name: 'Products',
        to: '/customer/products',
        icon: BagIcon,
      },
      {
        dataTestId: 'customer_products__element-navbar-link-orders',
        name: 'My orders',
        to: '/customer/orders',
        icon: ReceiptIcon,
      },
      {
        dataTestId: 'customer_products__element-navbar-user-full-name',
        name: username,
        to: '/account',
        icon: PersonIcon,
      },
      {
        dataTestId: 'customer_products__element-navbar-link-logout',
        name: 'Logout',
        to: '/login',
        icon: DoorClosedIcon,
      },
    ],
    seller: [
      {
        dataTestId: 'customer_products__element-navbar-link-orders',
        name: 'Sales',
        to: '/seller/orders',
        icon: ReceiptIcon,
      },
      {
        dataTestId: 'customer_products__element-navbar-user-full-name',
        name: username,
        to: '/account',
        icon: PersonIcon,
      },
      {
        dataTestId: 'customer_products__element-navbar-link-logout',
        name: 'Logout',
        to: '/login',
        icon: DoorClosedIcon,
      },
    ],
  });
}

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* State */
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchOrders,
  markAsDelivered,
  markAsDispatched,
  markAsPreparing,
} from '../../../redux/features/ordersSlice';

/* Children */
import { Table } from '../../molecules';

/* Styles */
import { ClassicLayout } from '../../templates';
import Styled from './Styled';

/* Utils */
import formatFloat from '../../../utils/formatFloat';
import LocalStorageMethods from '../../../utils/localStorage';

export default function OrderDetails() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const orderId = pathname.substring(pathname.lastIndexOf('/') + 1);

  // Order
  const order = useSelector(
    (state) => state.orders.orders.find((o) => o.id === Number(orderId)),
  );

  /* Controls */
  const dispatcher = (callback, user) => dispatch(callback({
    token: user.token,
    role: user.role,
    orderId,
  }));

  // Mark as Delivered
  const handleMarkAsDelivered = () => {
    const user = LocalStorageMethods.getParsedItem('user');
    if (user) dispatcher(markAsDelivered, user);
  };

  // Mark as Dispatched
  const handleMarkAsDispatched = () => {
    const user = LocalStorageMethods.getParsedItem('user');
    if (user) dispatcher(markAsDispatched, user);
  };

  // Mark as Preparing
  const handleMarkAsPreparing = () => {
    const user = LocalStorageMethods.getParsedItem('user');
    if (user) dispatcher(markAsPreparing, user);
  };

  const getControls = () => {
    const user = LocalStorageMethods.getParsedItem('user');

    if (user) {
      return user.role === 'customer'
        ? ([{
          disabled: (order && order.status) !== 'Em Trânsito',
          handleOnClick: () => handleMarkAsDelivered(),
          name: 'Mark as Delivered',
        }])
        : ([
          {
            disabled: order && order.status !== 'Pendente',
            handleOnClick: () => handleMarkAsPreparing(),
            name: 'Mark as Preparing',
          },
          {
            disabled: order && order.status !== 'Preparando',
            handleOnClick: () => handleMarkAsDispatched(),
            name: 'Mark as Dispatched',
          },
        ]);
    }
  };

  // Fetch Orders
  useEffect(() => {
    const user = LocalStorageMethods.getParsedItem('user');
    if (user) dispatch(fetchOrders({ token: user.token, role: user.role }));
  }, [dispatch]);

  return (
    <ClassicLayout id="order-details">
      <Styled>
        {
          order && (
            <Table
              body={
                order.products.map((p) => ({
                  ...p,
                  price: formatFloat(p.price),
                  subTotal: formatFloat(p.subTotal),
                }))
              }
              cols={ ['Name', 'Quantity', 'Unit Value', 'Sub-total'] }
              controls={ getControls() }
              labels={ [order.status] }
              sum={ formatFloat(order.totalPrice) }
              title={ `Order #${orderId}` }
            />
          )
        }
      </Styled>
    </ClassicLayout>
  );
}

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* State */
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders, markAsDelivered } from '../../../redux/features/ordersSlice';

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

  // Mark as Delivered
  const handleMarkAsDelivered = () => {
    const user = LocalStorageMethods.getParsedItem('user');
    if (user) {
      dispatch(markAsDelivered({
        token: user.token,
        role: user.role,
        orderId,
      }));
    }
  };

  // fetch orders
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
              controls={ [{
                disabled: order && order.status !== 'Em trânsito',
                handleOnClick: handleMarkAsDelivered,
                label: 'Mark as Delivered',
              }] }
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

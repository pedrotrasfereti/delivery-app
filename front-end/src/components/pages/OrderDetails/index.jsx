import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* State */
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders, markAsDelivered } from '../../../redux/features/ordersSlice';

/* Utils */
import LocalStorageMethods from '../../../utils/localStorage';
import formatDate from '../../../utils/formatDate';

/* Children */
import { ClassicLayout } from '../../templates';
import OrderTable from './OrderTable';

/* Styles */
import Styled from './Styled';

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
        <h2>
          Order #
          {orderId}
        </h2>

        <div>
          {
            order
            && (
              <>
                <span>
                  { Number(orderId) }
                </span>
                <span>
                  Fulana Pereira
                </span>
                <span>
                  { formatDate(order.saleDate) }
                </span>
                <span>
                  { order.status }
                </span>
              </>
            )
          }

          <button
            type="button"
            disabled={ order && order.status !== 'Em trânsito' }
            onClick={ handleMarkAsDelivered }
          >
            Mark as Delivered
          </button>
        </div>

        {
          order && (
            <OrderTable
              data={ {
                header: ['Item', 'Name', 'Quantity', 'Unit Value', 'Sub-total'],
                body: order.products,
                footer: ['Total', order.totalPrice],
              } }
            />
          )
        }
      </Styled>
    </ClassicLayout>
  );
}

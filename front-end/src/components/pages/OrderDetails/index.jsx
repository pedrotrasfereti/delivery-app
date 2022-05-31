import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* State */
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders, markAsDelivered } from '../../../redux/features/ordersSlice';

/* Utils */
import LocalStorageMethods from '../../../utils/localStorage';
import formatDate from '../../../utils/formatDate';

/* Children */
import OrderTable from './OrderTable';

export default function OrderDetails() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const orderId = pathname.substring(pathname.lastIndexOf('/') + 1);

  // order details
  const order = useSelector(
    (state) => state.orders.orders.find((o) => o.id === Number(orderId)),
  );

  // mark as delivered
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

  // data-testid
  const labelTestIdPrefix = 'customer_order_details__element-order-details-label-';

  return (
    <main>
      <div>
        {
          order
            && (
              <>
                <span
                  data-testid={ `${labelTestIdPrefix}order-id` }
                >
                  { Number(orderId) }
                </span>
                <span
                  data-testid={ `${labelTestIdPrefix}seller-name` }
                >
                  Fulana Pereira
                </span>
                <span
                  data-testid={ `${labelTestIdPrefix}order-date` }
                >
                  { formatDate(order.saleDate) }
                </span>
                <span
                  data-testid={ `${labelTestIdPrefix}delivery-status` }
                >
                  { order.status }
                </span>
              </>
            )
        }

        <button
          data-testid="customer_order_details__button-delivery-check"
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
    </main>
  );
}

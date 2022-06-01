import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* State */
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders, markAsDelivered } from '../../../redux/features/ordersSlice';

/* Utils */
import LocalStorageMethods from '../../../utils/localStorage';
import formatDate from '../../../utils/formatDate';

/* Children */
import { Table } from '../../molecules';

/* Styles */
import { ClassicLayout } from '../../templates';
import Styled from './Styled';

/* Utils */
import formatFloat from '../../../utils/formatFloat';

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
            <Table
              body={
                order.products.map((p) => ({
                  ...p,
                  price: formatFloat(p.price),
                  subTotal: formatFloat(p.subTotal),
                }))
              }
              caption={ `Order #${orderId}` }
              cols={ ['Name', 'Quantity', 'Unit Value', 'Sub-total'] }
              sum={ formatFloat(order.totalPrice) }
            />
          )
        }
      </Styled>
    </ClassicLayout>
  );
}

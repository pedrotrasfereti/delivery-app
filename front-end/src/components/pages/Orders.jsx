import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/* State */
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../redux/features/ordersSlice';

/* Children */
import { ClassicLayout } from '../templates';

/* Utils */
import formatDate from '../../utils/formatDate';
import formatFloat from '../../utils/formatFloat';
import LocalStorageMethods from '../../utils/localStorage';

/* Styles */
import { styled } from '../../stitches.config';

export const Main = styled('main', {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',

  '& .Empty': {
    color: '$textDark',
    fontFamily: '$sans2',
    fontSize: '$4',
    fontWeight: '$1',
  },
});

export default function Orders() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { orders } = useSelector((state) => state.orders);

  // Fetch Orders
  useEffect(() => {
    const user = LocalStorageMethods.getParsedItem('user');

    if (user) {
      dispatch(fetchOrders({ token: user.token, role: user.role }));
    }
  }, [dispatch]);

  return (
    <ClassicLayout>
      <Main>
        {
          orders.length ? (
            orders.map(({ id, status, saleDate, totalPrice }) => (
              <button
                key={ id }
                type="button"
                onClick={ () => navigate(`/customer/orders/${id}`) }
              >
                <span>
                  { id }
                </span>
                <span>
                  { status }
                </span>
                <span>
                  { formatDate(saleDate) }
                </span>
                <span>
                  { formatFloat(totalPrice) }
                </span>
              </button>
            ))
          ) : (
            <div className="Empty">
              <h2>{ 'You haven\'t placed an order yet!' }</h2>
            </div>
          )
        }
      </Main>
    </ClassicLayout>
  );
}

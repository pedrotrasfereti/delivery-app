import React, { useEffect } from 'react';

/* State */
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../redux/features/ordersSlice';

/* Children */
import { ClassicLayout } from '../templates';

/* Styles */
import { styled } from '../../stitches.config';
import { OrderCards } from '../organisms';

/* Utils */
import LocalStorageMethods from '../../utils/localStorage';

export const Main = styled('main', {
  alignItems: 'center',
  display: 'flex',
  flexFlow: 'column nowrap',

  '& .Empty': {
    color: '$textDark',
    fontFamily: '$sans2',
    fontSize: '$4',
    fontWeight: '$1',
    padding: '$5 0',
  },
});

export default function Orders() {
  const dispatch = useDispatch();

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
          orders.length
            ? <OrderCards orders={ orders } />
            : (
              <div className="Empty">
                <h2>{ 'You haven\'t placed an order yet!' }</h2>
              </div>
            )
        }
      </Main>
    </ClassicLayout>
  );
}

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/* Children */
import OrderCard from '../../molecules/OrderCard';

/* Styles */
import Styled from './Styled';

/* Utils */
import formatDate from '../../../utils/formatDate';
import generateTimeline from '../../../utils/generateTimeline';
import LocalStorageMethods from '../../../utils/localStorage';

export default function OrderCards({ orders }) {
  const timeline = generateTimeline(orders);

  const [selectedDate, setSelectedDate] = useState(timeline[0].date);
  const [filteredOrders, setFilteredOrders] = useState([]);

  useEffect(() => {
    const filtered = orders
      .filter((o) => formatDate(o.saleDate) === selectedDate);

    setFilteredOrders(filtered);
  }, [orders, selectedDate]);

  // Get Title
  const getTitle = () => {
    const user = LocalStorageMethods.getParsedItem('user');

    if (user) {
      return user.role === 'seller' ? 'All orders' : 'My orders';
    }

    return '';
  };

  // Conditional Styles
  const getDateClassName = (date) => (date === selectedDate ? 'Date Selected' : 'Date');

  return (
    <Styled id="order-cards">
      <h2>{ getTitle() }</h2>

      <div className="Container">
        <div className="Timeline">
          {
            timeline.map((moment) => (
              <button
                key={ moment.date }
                type="button"
                className={ getDateClassName(moment.date) }
                onClick={ () => setSelectedDate(moment.date) }
              >
                <span className="Year">{ moment.year }</span>
                <span className="Month">{ moment.month }</span>
                <span className="Day">{ moment.day }</span>
              </button>
            ))
          }
        </div>

        <span className="VerticalRule" />

        <div className="Orders">
          {
            filteredOrders.length ? (
              filteredOrders.map((order) => (
                <OrderCard key={ order.id } order={ order } />
              ))
            ) : <span>Fetching your orders...</span>
          }
        </div>
      </div>
    </Styled>
  );
}

OrderCards.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      status: PropTypes.string,
      saleDate: PropTypes.string,
      totalPrice: PropTypes.number,
    }),
  ),
}.isRequired;

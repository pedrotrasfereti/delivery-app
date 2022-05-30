import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

/* Utils */
import formatDate from '../../utils/formatDate';
import formatFloat from '../../utils/formatFloat';

export default function OrderCard({ order }) {
  const { id, status, saleDate, totalPrice } = order;

  const navigate = useNavigate();

  return (
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
  );
}

OrderCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    saleDate: PropTypes.string,
    totalPrice: PropTypes.number,
  }),
}.isRequired;

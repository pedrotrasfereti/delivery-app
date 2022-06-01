import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

/* Utils */
import formatFloat from '../../../utils/formatFloat';

/* Styles */
import Styled from './Styled';

export default function OrderCard({ order }) {
  const { id, status, totalPrice } = order;

  const navigate = useNavigate();

  return (
    <Styled
      key={ id }
      type="button"
      onClick={ () => navigate(`/customer/orders/${id}`) }
    >
      <h3 className="OrderId">
        Pedido
        #
        { id }
      </h3>
      <span className="Status">
        <span className="Decor" />
        Status:
        {' '}
        <span className="StatusCircle" />
        { status }
      </span>
      <span className="TotalPrice">
        Total:
        {' '}
        $
        { formatFloat(totalPrice) }
      </span>
    </Styled>
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

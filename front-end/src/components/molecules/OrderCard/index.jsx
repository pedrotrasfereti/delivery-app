import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

/* Utils */
import formatFloat from '../../../utils/formatFloat';
import LocalStorageMethods from '../../../utils/localStorage';

/* Styles */
import Styled from './Styled';

export default function OrderCard({ order }) {
  const { id, status, totalPrice } = order;

  const navigate = useNavigate();

  const to = () => {
    const user = LocalStorageMethods.getParsedItem('user');

    if (user) {
      return user.role === 'seller'
        ? `/seller/orders/${id}` : `/customer/orders/${id}`;
    }
  };

  // Conditional Styles
  const dotColorMap = {
    'Em Trânsito': '$accent2',
    Entregue: '$accent1',
    Pendente: '$primary',
  };

  const extraStyles = {
    '& .Status .Dot': {
      backgroundColor: dotColorMap[status],
    },
  };

  return (
    <Styled
      key={ id }
      type="button"
      onClick={ () => navigate(to()) }
      css={ extraStyles }
    >
      <h3 className="OrderId">
        Pedido
        #
        { id }
      </h3>
      <span className="Status">
        <span className="Dot" />
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

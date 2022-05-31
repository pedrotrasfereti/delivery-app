import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

/* Utils */
import formatDate from '../../utils/formatDate';
import formatFloat from '../../utils/formatFloat';

/* Styles */
import { styled } from '../../stitches.config';

const boxShadow = 'rgba(0, 0, 0, .08) 0px 4px 12px';

const Styled = styled('button', {
  appearance: 'none',
  backgroundColor: '$loContrast',
  border: '0',
  borderRadius: '$default',
  boxShadow,
  color: '$textDark',
  cursor: 'pointer',
  height: '8rem',
  flex: '1',
  outline: '0',
  padding: '$3',
  transition: 'flex ease .6s',

  '&:hover': {
    flex: '5',
  },

  '@bp4': {
    padding: '$2',
  },

  '@bp3': {
    padding: '$1',
  },
});

export default function OrderCard({ order }) {
  const { id, status, saleDate, totalPrice } = order;

  const navigate = useNavigate();

  return (
    <Styled
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

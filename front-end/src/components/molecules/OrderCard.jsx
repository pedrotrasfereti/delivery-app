import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

/* Utils */
import formatFloat from '../../utils/formatFloat';

/* Styles */
import { styled } from '../../stitches.config';

const boxShadow = 'rgba(0, 0, 0, .08) 0px 4px 12px';

const Styled = styled('button', {
  alignItems: 'center',
  appearance: 'none',
  backgroundColor: '$loContrast',
  border: '0',
  borderRadius: '$default',
  boxShadow,
  cursor: 'pointer',
  display: 'flex',
  height: '11rem',
  flex: '1',
  flexFlow: 'row wrap',
  justifyContent: 'space-around',
  minWidth: '9rem',
  outline: '0',
  padding: '$3',
  transition: 'flex ease .6s',

  '& h3': {
    color: '$textDark',
    fontFamily: '$sans2',
    fontSize: '$5',
    fontWeight: '$7',

    '@bp4': {
      fontSize: '$4',
    },

    '@bp3': {
      fontSize: '$3',
    },
  },

  '& .Status .Decor': {
    display: 'inline-block',
    backgroundColor: '$accent1',
    border: '0',
    borderRadius: '$round',
    boxShadow: 'hsl(166, 95%, 40%) 0px 0px 2px',
    height: '.5rem',
    marginBottom: '$1',
    marginRight: '$2',
    width: '.5rem',

    '@bp3': {
      height: '.4rem',
      width: '.4rem',
    },
  },

  '& .Status, & .TotalPrice': {
    color: '$gray700',
    fontFamily: '$sans',
    fontSize: '$4',
    fontWeight: '$4',

    '@bp4': {
      fontSize: '$3',
    },

    '@bp3': {
      fontSize: '$2',
    },
  },

  // Hover
  '&:hover': {
    flex: '2',

    '& .OrderId': {
      color: '$primary',
    },

    '& .Status, & .TotalPrice': {
      color: '$gray800',
    },
  },

  '@bp4': {
    height: '9rem',
    minWidth: '7rem',
    padding: '$2',
  },

  '@bp3': {
    height: '7rem',
    padding: '$1',
  },
});

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

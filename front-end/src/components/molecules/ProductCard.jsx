import React, { useState } from 'react';
import PropTypes from 'prop-types';

/* Children */
import Control from '../atoms/Control';

/* Styles */
import { styled } from '../../stitches.config';

const StitchesComponent = styled('header', {
  backgroundColor: '$loContrast',
  border: '0',
  borderRadius: '$default',
  boxShadow: 'rgba(149, 157, 165, 0.2) 0 8px 20px',
  display: 'flex',
  flexFlow: 'column nowrap',
  gap: '$4',
  height: '325px',
  width: '260px',

  '&>.product-card__image': {
    flex: '1.5',
    position: 'relative',

    '&>.product-card__discount:not(:empty)': {
      alignItems: 'center',
      color: '$textLight',
      backgroundColor: 'rgb(3,109,85)',
      background:
        'linear-gradient(333deg, rgba(3,109,85,1) 40%, rgba(61,149,105,1) 100%)',
      borderRadius: '0 $default',
      display: 'flex',
      fontFamily: '$sans',
      fontSize: '$2',
      fontWeight: '$5',
      height: '25px',
      justifyContent: 'center',
      opacity: '.9',
      padding: '$3 $2',
      position: 'absolute',
      right: '0',
      top: '0',
    },
  },

  '&>.product-card__content': {
    display: 'flex',
    flex: '1',
    flexFlow: 'column nowrap',
    gap: '$2',
    padding: '$3',

    '&>h3': {
      color: '$textDark',
      fontFamily: '$sans',
      fontSize: '$4',
      fontWeight: '$5',
    },

    '&>p': {
      color: '$gray600',
      fontFamily: '$sans',
      fontSize: '$3',
      fontWeight: '$4',
    },

    '&>.product-card__content-bottom': {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 'auto',

      '&>.product-card__content-price': {
        color: '$accent1',
        fontFamily: '$sans',
        fontSize: '$4',
        fontWeight: '$5',
      },

      '&>.product-card__content-controls': {
        display: 'flex',

        '&>.product-card__product-quantity': {
          alignItems: 'center',
          backgroundColor: '$background',
          color: '$textDark',
          display: 'flex',
          fontFamily: '$sans',
          fontSize: '$3',
          fontWeight: '$5',
          justifyContent: 'center',
          padding: '0 $2',
          width: '36px',
        },
      },
    },
  },
});

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(0);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <StitchesComponent>
      <div className="product-card__image">
        <span className="product-card__discount">-30%</span>
      </div>

      <div className="product-card__content">
        <h3>{ product.name }</h3>
        <p>Lorem ipsum dolor sit amet</p>

        <div className="product-card__content-bottom">
          <div className="product-card__content-price">
            <span>{`R$ ${product.price} `}</span>
          </div>

          <div className="product-card__content-controls">
            <Control handleOnClick={ decrement } operation="subtract" />

            <span className="product-card__product-quantity">
              { quantity }
            </span>

            <Control handleOnClick={ increment } />
          </div>
        </div>
      </div>
    </StitchesComponent>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    urlImage: PropTypes.string,
  }),
}.isRequired;

export default ProductCard;

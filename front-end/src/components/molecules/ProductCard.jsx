import React, { useState } from 'react';
import PropTypes from 'prop-types';

/* State */
import { useDispatch } from 'react-redux';
import {
  addProduct,
  removeProduct,
  updateProduct,
} from '../../redux/features/checkoutSlice';

/* Children */
import Control from '../atoms/Control';

/* Styles */
import { styled } from '../../stitches.config';

const StitchesComponent = styled('div', {
  backgroundColor: '$loContrast',
  border: '0',
  borderRadius: '$default',
  boxShadow: 'rgba(149, 157, 165, 0.2) 0 8px 20px',
  display: 'flex',
  flexFlow: 'column nowrap',
  gap: '$3',
  height: '350px',
  width: '260px',

  '&>.product-card__image': {
    flex: '1.5',
    position: 'relative',
    overflow: 'hidden',

    '&>img': {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    },

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
          backgroundColor: '$background',
          color: '$textDark',
          fontFamily: '$sans',
          fontSize: '$3',
          fontWeight: '$5',
          outline: '0',
          textAlign: 'center',
          width: '$4',
        },
      },
    },
  },

  '@bp3': {
    height: '300px',
    width: '210px',

    '&>.product-card__content': {  
      '&>p': {
        fontSize: '$2',
      },
    },
  },

  '@bp2': {
    height: '265px',
    width: '175px',

    '&>.product-card__content': {  
      '&>h3': {
        fontSize: '$3',
      },
    },
  },
});

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch();

  const handleAddProduct = () => {
    dispatch(addProduct(product));
    setQuantity((prev) => prev + 1);
  };

  const handleRemoveProduct = () => {
    dispatch(removeProduct(product));
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleChangeQty = (newQty) => {
    const num = Number(newQty);

    if (num) {
      dispatch(updateProduct({ ...product, quantity: num }));
      setQuantity(num);
    } else if (newQty === '') {
      dispatch(updateProduct({ ...product, quantity: 0 }));
      setQuantity(0);
    }
  };

  return (
    <StitchesComponent>
      <div className="product-card__image">
        <img
          data-testid={
            `customer_products__img-card-bg-image-${product.id}`
          }
          src={ product.urlImage }
          alt="Bebida"
        />
        <span className="product-card__discount">-5%</span>
      </div>

      <div className="product-card__content">
        <h3
          data-testid={
            `customer_products__element-card-title-${product.id}`
          }
        >
          { product.name }
        </h3>
        <p>Lorem ipsum dolor sit amet</p>

        <div className="product-card__content-bottom">
          <div
            className="product-card__content-price"
            data-testid={
              `customer_products__element-card-price-${product.id}`
            }
          >
            <span>{ String(product.price).replace('.', ',') }</span>
          </div>

          <div className="product-card__content-controls">
            <Control
              dataTestId={
                `customer_products__button-card-rm-item-${product.id}`
              }
              handleOnClick={ handleRemoveProduct }
              operation="subtract"
            />

            <input
              type="text"
              className="product-card__product-quantity"
              data-testid={
                `customer_products__input-card-quantity-${product.id}`
              }
              value={ quantity }
              onChange={ (e) => handleChangeQty(e.target.value) }
            />

            <Control
              dataTestId={
                `customer_products__button-card-add-item-${product.id}`
              }
              handleOnClick={ handleAddProduct }
            />
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
  // image: PropTypes.string,
}.isRequired;

export default ProductCard;

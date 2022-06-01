import React from 'react';
import PropTypes from 'prop-types';

/* State */
import { useDispatch } from 'react-redux';
import { updateProductQty } from '../../../redux/features/productsSlice';

/* Children */
import Control from '../../atoms/Control';

/* Styles */
import Styled from './Styled';

/* Utils */
import formatFloat from '../../../utils/formatFloat';

export default function ProductCard({ product }) {
  const { id, urlImage, name, price, quantity } = product;

  const dispatch = useDispatch();

  // Controls
  const increment = () => {
    const newQty = quantity + 1;
    dispatch(updateProductQty({ id, newQty }));
  };

  const decrement = () => {
    const newQty = quantity - 1 < 0 ? 0 : quantity - 1;
    dispatch(updateProductQty({ id, newQty }));
  };

  const setQuantity = (e) => {
    const newQty = Number(e.target.value);

    if (e.target.value === '') {
      dispatch(updateProductQty({ id, newQty: 0 }));
    } else if (newQty) {
      dispatch(updateProductQty({ id, newQty }));
    }
  };

  return (
    <Styled>
      <div className="product-card__image">
        <img src={ urlImage } alt="Product" />
        <span className="product-card__discount">-5%</span>
      </div>

      <div className="product-card__content">
        <h3>
          { name }
        </h3>
        <p>Lorem ipsum dolor sit amet</p>

        <div className="product-card__content-bottom">
          <div className="product-card__content-price">
            <span>{ formatFloat(price) }</span>
          </div>

          <div className="product-card__content-controls">
            <Control
              handleOnClick={ () => decrement() }
              operation="subtract"
            />

            <input
              type="text"
              className="product-card__product-quantity"
              value={ quantity }
              onChange={ setQuantity }
            />

            <Control handleOnClick={ () => increment() } />
          </div>
        </div>
      </div>
    </Styled>
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

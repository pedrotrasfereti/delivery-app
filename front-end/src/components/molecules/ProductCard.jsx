import * as React from 'react';
import PropTypes from 'prop-types';

/* State */
import { useDispatch } from 'react-redux';
import { updateProductQty } from '../../redux/features/productsSlice';

/* Children */
import Control from '../atoms/Control';

/* Styles */
// import { styled } from '../../stitches.config';

// const StitchesComponent = styled('div', {
//   backgroundColor: '$loContrast',
//   border: '0',
//   borderRadius: '$default',
//   boxShadow: 'rgba(149, 157, 165, 0.2) 0 8px 20px',
//   display: 'flex',
//   flexFlow: 'column nowrap',
//   gap: '$3',
//   height: '350px',
//   width: '260px',

//   '&>.product-card__image': {
//     flex: '1.5',
//     position: 'relative',
//     overflow: 'hidden',

//     '&>img': {
//       width: '100%',
//       height: '100%',
//       objectFit: 'contain',
//     },

//     '&>.product-card__discount:not(:empty)': {
//       alignItems: 'center',
//       color: '$textLight',
//       backgroundColor: 'rgb(3,109,85)',
//       background:
//         'linear-gradient(333deg, rgba(3,109,85,1) 40%, rgba(61,149,105,1) 100%)',
//       borderRadius: '0 $default',
//       display: 'flex',
//       fontFamily: '$sans',
//       fontSize: '$2',
//       fontWeight: '$5',
//       height: '25px',
//       justifyContent: 'center',
//       opacity: '.9',
//       padding: '$3 $2',
//       position: 'absolute',
//       right: '0',
//       top: '0',
//     },
//   },

//   '&>.product-card__content': {
//     display: 'flex',
//     flex: '1',
//     flexFlow: 'column nowrap',
//     gap: '$2',
//     padding: '$3',

//     '&>h3': {
//       color: '$textDark',
//       fontFamily: '$sans',
//       fontSize: '$4',
//       fontWeight: '$5',
//     },

//     '&>p': {
//       color: '$gray600',
//       fontFamily: '$sans',
//       fontSize: '$3',
//       fontWeight: '$4',
//     },

//     '&>.product-card__content-bottom': {
//       alignItems: 'center',
//       display: 'flex',
//       justifyContent: 'space-between',
//       marginTop: 'auto',

//       '&>.product-card__content-price': {
//         color: '$accent1',
//         fontFamily: '$sans',
//         fontSize: '$4',
//         fontWeight: '$5',
//       },

//       '&>.product-card__content-controls': {
//         display: 'flex',

//         '&>.product-card__product-quantity': {
//           backgroundColor: '$background',
//           color: '$textDark',
//           fontFamily: '$sans',
//           fontSize: '$3',
//           fontWeight: '$5',
//           outline: '0',
//           textAlign: 'center',
//           width: '$4',
//         },
//       },
//     },
//   },

//   '@bp3': {
//     height: '300px',
//     width: '210px',

//     '&>.product-card__content': {
//       '&>p': {
//         fontSize: '$2',
//       },
//     },
//   },

//   '@bp2': {
//     height: '265px',
//     width: '175px',

//     '&>.product-card__content': {
//       '&>h3': {
//         fontSize: '$3',
//       },
//     },
//   },
// });

function ProductCard({ product }) {
  const { id, urlImage, name, price, quantity } = product;

  const dispatch = useDispatch();

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
    dispatch(updateProductQty({ id, newQty }));
  };

  return (
    // <StitchesComponent>
    <div>
      <div className="product-card__image">
        <img
          data-testid={
            `customer_products__img-card-bg-image-${id}`
          }
          src={ urlImage }
          alt="Product"
        />
        <span className="product-card__discount">-5%</span>
      </div>

      <div className="product-card__content">
        <h3
          data-testid={
            `customer_products__element-card-title-${id}`
          }
        >
          { name }
        </h3>
        <p>Lorem ipsum dolor sit amet</p>

        <div className="product-card__content-bottom">
          <div
            className="product-card__content-price"
            data-testid={
              `customer_products__element-card-price-${id}`
            }
          >
            <span>{ String(price).replace('.', ',') }</span>
          </div>

          <div className="product-card__content-controls">
            <Control
              dataTestId={
                `customer_products__button-card-rm-item-${id}`
              }
              handleOnClick={ () => decrement() }
              operation="subtract"
            />

            <input
              type="number"
              className="product-card__product-quantity"
              data-testid={
                `customer_products__input-card-quantity-${id}`
              }
              min="0"
              max="99"
              value={ quantity }
              onChange={ setQuantity }
            />

            <Control
              dataTestId={
                `customer_products__button-card-add-item-${id}`
              }
              handleOnClick={ () => increment() }
            />
          </div>
        </div>
      </div>
    </div>
    // </StitchesComponent>
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

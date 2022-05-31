import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

/* Assets */
import {
  BsTrash as TrashIcon,
  BsTrashFill as TrashIconFill,
} from 'react-icons/bs';

/* State */
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateTotalPrice } from '../../redux/features/checkoutSlice';
import { updateProductQty } from '../../redux/features/productsSlice';

/* Utils */
import calculateTotalPrice from '../../utils/calculateTotalPrice';
import formatFloat from '../../utils/formatFloat';

/* Styles */
import { styled } from '../../stitches.config';

const Styled = styled('tbody', {
  '& tr': {
    borderBottom: '1px solid gainsboro',
    borderTop: '1px solid gainsboro',

    // Hover
    '&:hover td': {
      backgroundColor: 'hsl(215, 100%, 99%)',
    },

    // Text
    '& td': {
      backgroundColor: '$loContrast',
      fontFamily: '$sans',
      fontSize: '$3',
      fontWeight: '$3',
      textAlign: 'center',
      height: '4rem',
      padding: '0 $2',

      '@bp4': {
        fontSize: '$2',
        fontWeight: '$4',
      },
    },

    '& td.Bold': {
      fontWeight: '$4',
    },

    // Remove Item Button
    '& td button': {
      appearance: 'none',
      background: 'transparent',
      border: '0',
      color: '$quintenary',
      cursor: 'pointer',
      fontSize: '$5',
      outline: '0',
      padding: '0',

      '@bp4': {
        fontSize: '$4',
      },
    },

    // Remove Item Button Hover
    '& .TrashIconFill': {
      display: 'none',
    },

    '& td button:hover .TrashIcon': {
      display: 'none',
    },

    '& td button:hover .TrashIconFill': {
      display: 'block',
    },

    // Hide Item Column
    '@bp3': {
      '#item-column': {
        display: 'none',
      },
    },
  },
});

function TableBody({ data }) {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.checkout);

  const handleRemoveItem = (productId) => {
    // reset product quantity
    dispatch(updateProductQty({ id: productId, newQty: 0 }));

    // remove product from cart
    dispatch(removeItem(productId));
  };

  // update total price
  useEffect(() => {
    const updatedTotalPrice = calculateTotalPrice(cart);

    dispatch(updateTotalPrice(updatedTotalPrice));
  }, [dispatch, cart]);

  return (
    <Styled>
      {
        data.map(({ id, name, quantity, price, subTotal }, index) => (
          <tr key={ id }>
            <td id="item-column" className="Bold">
              { index + 1 }
            </td>
            <td className="Bold">
              { name }
            </td>
            <td className="Bold">
              { quantity }
            </td>
            <td>
              $
              { formatFloat(price) }
            </td>
            <td>
              $
              { formatFloat(subTotal) }
            </td>
            <td>
              <button
                type="button"
                onClick={ () => handleRemoveItem(id) }
              >
                <TrashIcon className="TrashIcon" />
                <TrashIconFill className="TrashIconFill" />
              </button>
            </td>
          </tr>
        ))
      }
    </Styled>
  );
}

TableBody.propTypes = {
  body: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default TableBody;

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

/* Assets */
import {
  BsTrash as TrashIcon,
  BsTrashFill as TrashIconFill,
} from 'react-icons/bs';

/* State */
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateTotalPrice } from '../../../redux/features/checkoutSlice';
import { updateProductQty } from '../../../redux/features/productsSlice';

/* Styles */
import Styled from './Styled';

/* Utils */
import calculateTotalPrice from '../../../utils/calculateTotalPrice';

export default function TableBody({ data }) {
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
        data.map(({
          id,
          name,
          quantity,
          price,
          subTotal,
        },
        index,
        ) => (
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
              { price }
            </td>
            <td>
              $
              { subTotal }
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

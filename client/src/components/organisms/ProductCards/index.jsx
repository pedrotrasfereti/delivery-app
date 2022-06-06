import React from 'react';
import PropTypes from 'prop-types';

/* Children */
import { ProductCard } from '../../molecules';

/* Styles */
import Styled from './Styled';

export default function ProductCards({ products }) {
  return (
    <Styled>
      <h2>All products</h2>

      <div className="Container">
        {
          products.map((product) => (
            <ProductCard product={ product } key={ product.id } />
          ))
        }
      </div>
    </Styled>
  );
}

ProductCards.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.number,
      urlImage: PropTypes.string,
    }),
  ),
}.isRequired;

import * as React from 'react';

/* State */
import { useSelector } from 'react-redux';

/* Children */
import { ProductCard } from '../molecules';

/* Styles */
// import { styled } from '../../stitches.config';

// const StitchesComponent = styled('section', {
//   padding: '2rem 0',

//   '&>h2': {
//     color: '$textDark',
//     fontFamily: '$sans2',
//     fontSize: '$6',
//     fontWeight: '$5',
//     textAlign: 'center',
//   },

//   '&>.product-cards': {
//     alignItems: 'center',
//     display: 'flex',
//     flexFlow: 'row wrap',
//     gap: '$3',
//     justifyContent: 'center',
//     marginTop: '2rem',
//   },
// });

function ProductCards() {
  const { products } = useSelector((state) => state.products);

  return (
    // <StitchesComponent>
    <section>
      <h2>All products</h2>

      <div className="product-cards">
        {
          products
            ? products.map((product) => (
              <ProductCard product={ product } key={ product.id } />
            )) : (
              <span>Loading...</span>
            )
        }
      </div>
    </section>
    // </StitchesComponent>
  );
}

export default ProductCards;

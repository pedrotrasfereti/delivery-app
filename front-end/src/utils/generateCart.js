/**
 * Generates a cart based on the current list of products.

 * @param {array} products The current list of products.

 * @returns A cart of products.
 */
function generateCart(products) {
  const filteredProducts = products
    .filter(({ quantity }) => quantity > 0);

  return filteredProducts.map(({ urlImage, ...p }) => {
    const subTotal = Math
      .round((p.price * p.quantity + Number.EPSILON) * 100) / 100;

    return {
      ...p,
      subTotal,
    };
  });
}

export default generateCart;

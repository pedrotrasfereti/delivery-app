/**
 * Calculates the total price by accumulating the product
 * (multiplication) of each object's price and quantity values.

 * @param {array} cart The current cart of products.

 * @returns The new total price.
 */
function calculateTotalPrice(cart) {
  const total = cart.reduce((acc, obj) => acc + obj.subTotal, 0);

  return Math.round((total + Number.EPSILON) * 100) / 100;
}

export default calculateTotalPrice;

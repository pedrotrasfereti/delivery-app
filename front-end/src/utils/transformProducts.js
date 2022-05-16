function transformProducts(products) {
  const arr = Object.entries(products);

  const transformed = arr.reduce((result, value) => {
    const subTotal = Number(value[1].price) * Number(value[1].quantity);

    result.push({
      id: value[0],
      subTotal: Math.round((subTotal + Number.EPSILON) * 100) / 100,
      ...value[1],
  });

    return result;
  }, []);

  return transformed;
}

export default transformProducts;

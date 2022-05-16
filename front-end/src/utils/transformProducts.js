function transformProducts(products) {
  const arr = Object.entries(products);

  const transformed = arr.reduce((result, value) => {
    result.push({ id: value[0], ...value[1]  });
    return result;
  }, []);

  return transformed;
}

export default transformProducts;

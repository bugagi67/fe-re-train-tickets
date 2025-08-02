export const findMinimumPrice = (priceObject: any) => {
  const arrValues = Object.values(priceObject);
  const numericValues = arrValues.filter((value) => typeof value === "number");
  return Math.min(...numericValues);
};

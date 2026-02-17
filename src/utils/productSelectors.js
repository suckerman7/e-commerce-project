export const getTopRatedProducts = (products = [], limit = 6) => {
  if (!Array.isArray(products) || products.length === 0) return [];

  return [...products]
    .filter(p => typeof p.rating === "number")
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
};
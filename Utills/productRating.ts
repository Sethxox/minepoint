export const calProductRating = (reviews: any[]): number => {
  if (!reviews || reviews.length === 0) return 0;

  const totalRating = reviews.reduce(
    (acc: number, item: any) => item.rating + acc,
    0
  );
  return totalRating / reviews.length;
};

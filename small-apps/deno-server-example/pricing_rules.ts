export const getThresholdPrice = (affiliateId: number): number => {
  switch (affiliateId) {
    case 1:
      return 101;
    case 2:
      return 50;
    default:
      return 40;
  }
}
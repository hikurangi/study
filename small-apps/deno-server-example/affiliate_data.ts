export const getDataUrl = (affiliateId: number): string => {
  switch (affiliateId) {
    case 5:
      return "https://raw.githubusercontent.com/hikurangi/study/abb9c7e9ca201f718ed86b7331cd102a640a02d6/small-apps/deno-server-example/products.json"
    default:
      return ""
  }
}
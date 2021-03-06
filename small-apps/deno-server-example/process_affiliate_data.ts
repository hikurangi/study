import { Product } from "./product.ts"

const affiliateID: number = parseInt(Deno.args[0])
const data_url: string = "https://raw.githubusercontent.com/hikurangi/study/abb9c7e9ca201f718ed86b7331cd102a640a02d6/small-apps/deno-server-example/products.json"

const response = await fetch(data_url)
const data = await response.json() as Product[]

const affiliate_products: Product[] = data.reduce((products, product) => product.price > 40
  ? [...products, {
    ...product,
    affiliateID
  }]
  : products, new Array<Product>())

Deno.writeTextFile('affiliate_products.json', JSON.stringify(affiliate_products, null, '\t'))
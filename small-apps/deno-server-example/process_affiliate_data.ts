import { Product } from "./product.ts"
import { getDataUrl } from "https://raw.githubusercontent.com/hikurangi/study/main/small-apps/deno-server-example/affiliate_data.ts"
import { getThresholdPrice } from "https://raw.githubusercontent.com/hikurangi/study/main/small-apps/deno-server-example/pricing_rules.ts"

const affiliateID: number = parseInt(Deno.args[0])
const data_url: string = getDataUrl(affiliateID)
const threshold_price: number = getThresholdPrice(affiliateID)

const response = await fetch(data_url)
const data = await response.json() as Product[]

const affiliate_products: Product[] = data.reduce((products, product) => product.price > threshold_price
  ? [...products, {
    ...product,
    affiliateID
  }]
  : products, new Array<Product>())

Deno.writeTextFile('affiliate_products.json', JSON.stringify(affiliate_products, null, '\t'))
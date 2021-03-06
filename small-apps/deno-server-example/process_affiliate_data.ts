import { Product } from "./product.ts"

// The Import Map strategy for importing dependencies uses the keys under "imports" in import_map.json. MAGIC 🪄🔮
// NOTE: To get rid of red squigglies, reference this in the .vscode/settings.json, like so: "deno.import_map": "./import_map.json"
// Also NOTE: to use the unstable import maps feature, one must also run deno with the --import-map=path-to-my-import-map.json and --unstable flags
// import { getDataUrl } from "data_sources"
// import { getThresholdPrice } from "prices"

import { getDataUrl, getThresholdPrice } from "./deps.ts"

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
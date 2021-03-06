import { Application, Router } from "https://deno.land/x/oak@v6.5.0/mod.ts"
import { Product } from "./product.ts"

const PORT = 8000
const productsJson = await Deno.readTextFile("affiliate_products.json")
const productsArray = JSON.parse(productsJson) as Product[]

const router = new Router()

router
  .get("/products", (context: any) => {
    context.response.body = JSON.stringify(productsArray, null, "\t")
  })
  .get("/products/:id", (context: any) => {
    const requestedProduct = productsArray.find(p => p.productID == context.params.id)
    context.response.body = JSON.stringify(requestedProduct, null, "\t")
  })

const app = new Application()
app.use(router.routes())

console.log(`Listening for requests on port ${PORT}...`)

await app.listen({ port: PORT})
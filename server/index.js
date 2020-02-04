const express = require('express')
const app = express()
app.use(express.json())
let port = 4040
let products = require('../products.json')
// const getProducts = require('./getProducts')
const search = require('./filterById')

console.log(products)

app.get('/api/products', search.getProducts)

app.get('/api/products/:id', search.filterById)



app.listen(port, () => console.log('server running'))
let products = require('../products.json')

module.exports = {
    filterById: (req, res) => {
        const product = products.find(val => val.id === +req.params.id)
        if (!product){
        return res.status(500).send('Item not in list')
        }else res.status(200).send(product)
    
},
    getProducts: (req, res) => {
        console.log(req.query.price)
        if(req.query.price){
        const price = products.filter(val => val.price >= +req.query.price)
        return res.status(200).send(price)
        }
        res.status(200).send({products: products})
    }    // searchPrice: (req, res) => {
        
    //     // res.status(200).send(products)
    // }
}

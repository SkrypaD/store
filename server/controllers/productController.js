const pool = require('../dbconfig')

const ProductConfig = require('../dbrequests/productconfig')
const dbProductConf = new ProductConfig(pool)

function createProduct(req, res){
    const product = req.validatedProduct
    dbProductConf.createProduct(product)
        .then(response => res.status(201).json({message:`Product ${product.name} has been created`}))
        .catch(err => {res.status(500).json({message: 'Internal server error'})})
}

function updateProduct(req, res){
    const id = req.params.id
    const product = req.validatedProduct

    dbProductConf.updateProduct(product, id)
        .then(productsAffected => {
            if(productsAffected !== 0){
                res.status(200).json({message: `Product with id ${id} has been updated`})
            }else{
                res.status(404).json({message: `Product with id ${id} does not exist`})
            }
        })
        .catch(err => res.status(500).json({message : 'Internal server error'}))
}

function deleteProduct(req, res){
    const id = req.params.id

    dbProductConf.deleteProduct(id)
        .then(productsAffected => {
            if(productsAffected !== 0){
                res.status(200).json({message: 'Product has been deleted'})
            }else{
                res.status(404).json({message : `Product with id ${id} does not exist`})
            }
        })
        .catch(err => res.status(500).json({message : 'Internal server error'}))
}

function getProductById(req, res){
    const id = req.params.id
    
    dbProductConf.getProductById(id)
        .then(data => {
            if(data.length !== 0){
                res.status(200).json({product : data})
            }else{
                res.status(404).json({message : `Product with id ${id} does not exist`})
            }
        })
        .catch(err => res.status(500).json({message : 'Internal server error'}))
}

function getProductByName(req, res){
    const name = req.params.name

    dbProductConf.getProductByName(name)
        .then(data => {
            if(data.length !== 0){
                res.status(200).json({data: data})
            }else{
                res.status(404).json({message : `Product with name ${name} does not exist`})
            }
        })
        .catch(err => res.status(500).json({message : 'Internal server error'}))
}

function getProductsByCategory(req, res){
    const categoryId = req.categoryId

    dbProductConf.getProductsByCategory(categoryId)
        .then(data => {
            if(data.length === 0){
                res.status(400).json({message : "Category is empty"})
            }else{
                res.status(200).json({data : data})
            }
        })
        .catch(err => res.status(500).json({message : 'Internal server error'}))
}

async function getProductsWithDiscount(req, res){
    dbProductConf.getProductsWithDiscount()
        .then(data => res.status(200).json({data: data}))
        .catch(err => { res.status(500).json({message: 'Internal server error'})})
}

async function getAllProducts(req, res){
    dbProductConf.getAllProducts()
        .then(data => res.status(200).json({data: data}))
        .catch(err => { res.status(500).json({message: 'Internal server error'})})
}

module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getProductById,
    getProductByName,
    getProductsByCategory,
    getProductsWithDiscount,
    getAllProducts
}

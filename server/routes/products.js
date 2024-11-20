const {
    createProduct,
    updateProduct,
    deleteProduct,
    getProductById,
    getProductByName,
    getProductsByCategory,
    getProductsWithDiscount,
    getAllProducts
} = require('../controllers/productController')
const { isAdministrator } = require('../middleware/AuthorizationMiddleware')
const { validateProductCreation, validateProductUpdate, validateId } = require('../validators/productValidators')

const express = require('express')
const router = express.Router();


router.post('/create-product', isAdministrator, validateProductCreation, createProduct)
router.patch('/update-product/:id', isAdministrator, validateId, validateProductUpdate, updateProduct)
router.delete('/delete-product/:id', isAdministrator, validateId, deleteProduct)
router.get('/get-product-by-id/:id', isAdministrator, validateId, getProductById)
router.get('/get-product-by-name/:name',getProductByName)
router.get('/get-product-by-category/:category', validateId,getProductsByCategory)
router.get('/get-product-with-discounts', getProductsWithDiscount)
router.get('/get-all-products', getAllProducts)


module.exports = router;

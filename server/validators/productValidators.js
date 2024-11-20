const { createProductSchema, updateProductSchema } = require('./productValidationSchema')


function validateProductCreation(req, res, next){
    const { error, value } = createProductSchema.validate(req.body)

    if(error){
        return res.status(404).send({
            message: error.details.map(err => err.message).join(', ')
        })
    }
    req.validatedProduct = value;
    next();
}

function validateProductUpdate(req, res, next){
    const { error, value } = updateProductSchema.validate(req.body)

    if(error){
        return res.status(404).send({
            message: error.details.map(err => err.message).join(', ')
       })
    }
    req.validatedProduct = Object.values(value);
    next();
}

function validateId(req, res, next) {
    const { id } = req.params;  
    if (isNaN(id) || parseInt(id) <= 0) {
        return res.status(400).json({message: 'Invalid ID provided'});
    }
    next();  
}


module.exports = {
    validateProductCreation,
    validateProductUpdate,
    validateId
}

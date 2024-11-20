class ProductConfig {
    constructor(pool){
        this.pool = pool;
    }

    async createProduct(product){
        try{
            const query = 'insert into products (name, quantity, img_url, description, price, discount, category_id) values ($1, $2, $3, $4, $5, $6, $7)'
            const response = await this.pool.query(query, product)
            return response.rowCount
        }
        catch(err){
            throw err
        }
    }

    async updateProduct(product, id){
        const productValues = Object.values(product);
        const productKeys = Object.keys(product);
        let queryBody = ''; 

        for (let i = 0; i < productKeys.length; i++) {
            queryBody += ` ${productKeys[i]} = $${i + 2}`;
            if (i !== productKeys.length - 1) 
                queryBody += ',';
        }

        try {
            const query = `update products SET ${queryBody} where id = $1`;
            const response = await this.pool.query(query, [id, ...productValues]);
            return response.rowCount; 
        } catch (err) {
            throw err;
        }
    }

    async deleteProduct(id){
        try{
            const query = 'delete from products where id = $1'
            const response = await this.pool.query(query, [id])
            return response.rowCount
        }catch(err){
            throw err
        }
    }

    async getProductById(id){
        try{
            const query = 'select * from products where id = $1'
            const response = await this.pool.query(query, [id])
            return response.rows
        }catch(err){
            throw err
        }
    }

    async getProductByName(name){
        try{
            const query = 'select * from products where name ~* $1'
            const pattern = `.*${name}.*`
            const response = await this.pool.query(query, [pattern])
            return response.rows
        }catch(err){
            throw err
        }
    }

    async getProductsByCategory(categoryId){
        try{
            const query = 'select * from products where category_id = $1'
            const response = await this.pool.query(query, [categoryId])
            return response.rows
        }catch(err){
            throw err
        }
    }

    async getProductsWithDiscount(discount = 0){
        try{
            const query = 'select * from products where discount > $1'
            const response = await this.pool.query(query, [discount])
            return response.rows
        }catch(err){
            throw err
        }
    }

    async getAllProducts(){
        try{
            const query = 'select * from products'
            const response = await this.pool.query(query)
            return response.rows
        }catch(err){
            throw err
        }
    }
}

module.exports = ProductConfig



import styles from './styles/productinfo.module.css'


function ProductInfo({product}){
    const { productName, description, salePrice, originalPrice, score, reviews, isAvailable} = product 
    return(
        <div className={styles.product_info_body}>
            <h2 className={styles.product_name}>{productName}</h2>
            <span className={styles.product_price}>{originalPrice}</span>
            <span className={styles.product_isavailable}>{isAvailable}</span>
            <span className={styles.product_description}>{description}</span>
        </div>
    )
}

export default ProductInfo

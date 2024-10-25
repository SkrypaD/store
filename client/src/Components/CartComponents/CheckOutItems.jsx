import styles from './styles/checkoutitems.module.css'


function CheckOutItems({products}){
    console.log(products)
    return (
        <div className={styles.checkout_box}>
        {products.map(element => (
            <div className="space-between">
               <div className={styles.name}>
                <img src={element.image}/>
                <span>{element.productName}</span>
                </div> 
               <div>{element.salePrice}</div> 
            </div>
        ))}
        </div>
    )
}

export default CheckOutItems

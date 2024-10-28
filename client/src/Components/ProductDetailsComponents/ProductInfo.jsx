import ReactStars from 'react-stars'
import styles from './styles/productinfo.module.css'
import {useState} from 'react'


function ProductInfo({product}){
    const { productName, description, salePrice, originalPrice, score, reviews, isAvailable} = product 
    const [counter, setCounter] = useState(1)

    function decrease(){
        if(counter > 1) {
            setCounter(counter - 1)
        }
    }

    function increase(){
        setCounter(counter + 1)
    }

    function addToWishList(){
        console.log('add to wishlist')
    }

    return(
        <div className={styles.product_info_body}>
            <h2 className={styles.product_name}>{productName}</h2>
            <div className={styles.product_rating}>
                <ReactStars
                    count={5}
                    color2={'#ffd700'}
                    value={score}
                    size='20px'
                    edit={false}
                />
                <span>({reviews} reviews)</span>   |   <span className={styles.product_isavailable}>{isAvailable && 'In Stack'}</span>
            </div>
            <span className={styles.product_price}>${originalPrice}</span>
            <span className={styles.product_description}>{description}</span>
            <hr/>
        <div className={styles.product_interaction}>
            <div className={styles.product_counter}>
                <div onClick={() => decrease()}><img src='../../../public/icons/minus.png'/></div>
                <div>{counter}</div>
                <div onClick={() => increase()}><img src='../../../public/icons/plus.png'/></div>
            </div>
            <button className={styles.red_btn}>Buy now</button>
            <div className={styles.product_wishlish} onClick={() => addToWishList()}>
                <img src='../../../public/icons/like.png'/>
            </div>
        </div>
        <div className={styles.information_panel}>
            <div>
                <img src='../../../public/icons/return.png'/>
            </div>
            <div className={styles.info}>
                <h3>Return Delivery</h3>
                <span>Free 30 Days Delivery Returns.</span>
            </div>
        </div>
        </div>
    )
}

export default ProductInfo

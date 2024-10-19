import {useState} from 'react'
import styles from './styles/productcard.module.css'
import {Link} from 'react-router-dom'
import ReactStars from 'react-stars'

function ProductCard({props, wishlist=false}){
    const [onCard, setOnCard] = useState(false)
    const {id, productName, salePrice, originalPrice, score, reviews, image} = props

    const salePriceProcent = Math.round(((originalPrice - salePrice) / originalPrice) * 100)
    function MouseEnter(){
        setOnCard(true)
    }
    function MouseLeave(){
        setOnCard(false)
    }

    function addToWishList(){
        console.log('added to wish list')
    }

    function addToCart(){
        console.log('added to cart')
    }

    return (
        <div
        className={styles.card} 
        onMouseEnter={MouseEnter} 
        onMouseLeave={MouseLeave}
        >
            <div className={styles.image}>
                <img src={image}/>
                {salePriceProcent > 0 && <div className={styles.sale_procent}>
                    -{salePriceProcent}%
                    </div>
                }
                <div className={styles.interact_btns}>
                {wishlist ? 
                    <div className={styles.like} onClick={addToWishList}>
                        <img  src='../../public/icons/trash_can.png'/>
                    </div>
                    :
                    <>
                    <div className={styles.like} onClick={addToWishList}>
                        <img  src='../../public/icons/like.png'/>
                    </div>
                    <Link className={styles.eye} to={`/productdetails/${id}`}>
                        <img  src='../../public/icons/eye.png'/>
                    </Link>
                    </>
                }
                </div>

            {onCard && <div className={styles.add_to_cart} onClick={addToCart}>
                        <img className={styles.cart} src='../../public/icons/cart.png'/>
                        <span >Add to cart</span>
                        </div>
            }

            </div>
            <Link to={`/productdetails/${id}`} className={styles.info}>
                <div className={styles.name}>{productName}</div>
                <div className={styles.originalPrice}>
                    {salePriceProcent > 0 && <span className={styles.salePrice}>${salePrice}</span>}
                    <span className={salePriceProcent > 0 ? styles.price : styles.salePrice}>${originalPrice}</span>
                </div>
                <div className={styles.score}>
                     <ReactStars
                        count={5}
                        color2={'#ffd700'}
                        value={score}
                        size='20px'
                        edit={false}
                    />
                    <span >({reviews})</span>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard

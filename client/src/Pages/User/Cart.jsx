import {Link} from "react-router-dom"
import CartTable from "../../Components/CartComponents/CartTable"

import styles from './styles/cart.module.css'
import {useState} from "react"
import CartTotal from "../../Components/CartComponents/CartTotal"
import CartCoupon from "../../Components/CartComponents/CartCoupon"

function Cart(){
    const [total, setTotal] = useState(0)
    const [coupon, setCoupon] = useState('')

    return (
        <div className="wrapper">
            <CartTable total={setTotal}/>
            <div className="space-between">
                <button className="black-btn"> <Link to='/'>Return to Shop</Link> </button>
                <button className="black-btn">Clear cart</button>
            </div>
            <div className="space-between">
                <CartCoupon coupon={coupon} setCoupon={setCoupon}/>
                <div className={styles.cart_total}>
                    <h3>Cart Total</h3>
                    <CartTotal total={total}/>
                    <Link to='/checkout' className="red-btn">Procces to checkout</Link>
                </div>
            </div>
        </div>
    )
}


export default Cart

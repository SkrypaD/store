import styles from './styles/cartcoupon.module.css'


function CartCoupon({coupon, setCoupon}){

    function applyCoupon(){
        console.log('coupon applied')
    }
    return (
        <div>
            <input 
            inputMode="text"
            className={styles.coupon_input} 
            placeholder="Coupon Code"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            />
            <button className="red-btn" onClick={() => applyCoupon()}>Apply Coupon</button>
        </div>
    )
}

export default CartCoupon

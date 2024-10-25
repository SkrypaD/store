import styles from './styles/carttotal.module.css'


function CartTotal({total}){
    return (
        <div className={styles.cart_total}>
            <div className="space-between"><span>Subtotal:</span> <span> ${total}</span></div>
            <div className="space-between"><span>Shipping:</span> <span> {"Free"}</span></div>
            <div className="space-between"><span>Total:</span> <span> ${total}</span></div>
        </div>
    )
}

export default CartTotal

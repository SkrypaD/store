import {useState} from "react"

import CartCoupon from "../../Components/CartComponents/CartCoupon"
import CartTotal from "../../Components/CartComponents/CartTotal"
import BillingInput from "../../Components/CheckOutComponents/BillingInput"
import CheckOutItems from "../../Components/CartComponents/CheckOutItems"

import labels from "./checkOutInput"

import styles  from './styles/checkout.module.css'

const mouse = {id: 1, productName:'HAVIT HV-G92 Gamepad', salePrice:'120', originalPrice:'160', score:'5', reviews:'88', image: '../../../public/mouse.png' }
const mouse2= {id: 2, productName:'HAVIT HV-G92 Gamepad', salePrice:'160', originalPrice:'160', score:'5', reviews:'88', image: '../../../public/mouse.png' }
const products = [mouse, mouse2]

function CheckOut(){
    const [inputs, setInputs] = useState(Array(labels.length).fill(''))
    const total = products.reduce((sum, value) => sum + Number(value.salePrice), 0)
    return (
        <div className="wrapper">
            <div className="space-between">
                <div className={styles.billing_details}>
                    <h3>Billing Details</h3>
                    {labels.map((element, index) => (
                        <BillingInput key={index} id={index} label={element.name} required={element.required}  values={inputs} setValues={setInputs}/>
                    ))
                    }
                </div>
                <div className={styles.payment}>
                    <CheckOutItems products={products}/>
                    <CartTotal total={total}/>
                    <label className={styles.payment_option}>
                        <input type="radio" name="payment" value="Bank"/>
                        Bank
                    </label>
                    <label className={styles.payment_option}>
                        <input checked type="radio" name="payment" value="Cash"/>
                        Cash on delivery
                    </label>
                    <CartCoupon/>
                    <button className="red-btn">Place Order</button>
                </div>
            </div>
        </div>
    )
}

export default CheckOut


import {useEffect, useState} from "react"

import styles from './styles/carttable.module.css'

function CartTable({total}){
    const mouse = {id: 1, productName:'HAVIT HV-G92 Gamepad', salePrice:'120', originalPrice:'160', score:'5', reviews:'88', image: '../../../public/mouse.png' }
    const mouse2= {id: 2, productName:'HAVIT HV-G92 Gamepad', salePrice:'160', originalPrice:'160', score:'5', reviews:'88', image: '../../../public/mouse.png' }
    const products = [mouse, mouse2]
    
    const [quantity, setQuantity] = useState(Array(products.length).fill(1))

    function updatedQuantity(index, newValue){
        const updatedQuantity = quantity.map((item, i) => (
            i === index ? newValue : item
        ))
        setQuantity(updatedQuantity)
    }

    useEffect(() => {
            total(products.reduce((sum, item, index) => sum + item.salePrice * quantity[index], 0))
    }, [quantity])

    return (
        <table className={styles.cart_table}>
        <thead>
            <tr>
                <th className={styles.cart_title}>Product </th>
                <th className={styles.cart_title}>Price </th>
                <th className={styles.cart_title}>Quantity</th>
                <th className={styles.cart_title}>Subtotal</th>
            </tr>
        </thead>
        <tbody>
            {
            products.map((product, index) => (
                <tr>
                    <td className={`${styles.cart_data}, ${styles.cart_data_name}`}>
                        <img className={styles.cart_img} src={product.image}/>
                        {product.productName}
                    </td>
                    <td className={styles.cart_data}>{product.salePrice}</td>
                     <td className={styles.cart_data} >
                        <input 
                            type="number" 
                            value={quantity[index]} 
                            onChange={(e) => updatedQuantity(index, e.target.value)} 
                            min="1"
                            onKeyDown={(e) => e.preventDefault()}
                        />
                    </td>
                    <td className={styles.cart_data}>{product.salePrice * quantity[index]}</td>
                    <td className={styles.delete_item} onClick={() => console.log("deleted")}>
                        <img src="../../../public/icons/cross.png" alt="delete"/>
                    </td>
                </tr>
            ))
            }
        </tbody>
        </table>
    )
}


export default CartTable

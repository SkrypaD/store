import {useEffect, useState} from "react"

import styles from './styles/carttable.module.css'

function CartTable({total}){
    
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem('cartItems')) || [])
    const [quantity, setQuantity] = useState(Array(products.length).fill(1))

    function updatedQuantity(index, newValue){
        const updatedQuantity = quantity.map((item, i) => (
            i === index ? newValue : item
        ))
        setQuantity(updatedQuantity)
    }

    function deleteItemFromCart(id, index){
        if(products.length != 0){
            const updatedSorage = products.filter(product => product.id !== id)
            setProducts(updatedSorage)
            const updatedQuantity = quantity
            console.log(updatedQuantity)
            setQuantity(updatedQuantity.splice(index, 1))
            console.log(quantity)
            localStorage.setItem('cartItems', JSON.stringify(updatedSorage))
        }
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
                    <td className={styles.delete_item} onClick={() => deleteItemFromCart(product.id, index)}>
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

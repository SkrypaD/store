import ProductCard from '../../Components/ProductCard'
import ProductInfo from '../../Components/ProductDetailsComponents/ProductInfo'
import ProductPhotos from '../../Components/ProductDetailsComponents/ProductPhotos'
import styles from './styles/productpage.module.css'

    const mouse = {id: 1, productName:'HAVIT HV-G92 Gamepad', salePrice:'120', originalPrice:'160', score:'5', reviews:'88', image: '../../../public/mouse.png' }
    const mouse2= {id: 2, productName:'HAVIT HV-G92 Gamepad', salePrice:'160', originalPrice:'160', score:'5', reviews:'88', image: '../../../public/mouse.png' }
    const prod = { productName:'HAVIT HV-G92 Gamepad', description: 'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.', salePrice: '120', originalPrice: '160', score: '5', reviews: '88', isAvailable: true}
function ProductDetails(){
    return (
        <div className='wrapper' style={{color: 'black'}}>
            <div className={styles.product_details}>
                <ProductPhotos />
                <ProductInfo product={prod}/>
            </div>
            <div className="products-element">
                <div className="products-element-title">
                    <span className="red-title">Related Items</span>
                </div>
                <div className="cards-grid">
                    <ProductCard  props={mouse}/>
                    <ProductCard  props={mouse2}/>
                    <ProductCard  props={mouse}/>
                    <ProductCard  props={mouse}/>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails

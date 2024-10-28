import styles from './styles/productphotos.module.css'


function ProductPhotos(){
    return(
        <div className={styles.main_block}>
            <div className={styles.collage}>
                <img src="../../../public/products/gamepad.png"/>
                <img src="../../../public/products/gamepad.png"/>
                <img src="../../../public/products/gamepad.png"/>
            </div>
            <div className={styles.main_photo}>
                <img src="../../../public/products/gamepad.png"/>
            </div>
        </div>
    )
}

export default ProductPhotos

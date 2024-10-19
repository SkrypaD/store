import Slider from "../../Components/HomeComponents/Slider"
import ProductCard from "../../Components/ProductCard"

import styles from "./styles/home.module.css"

function Home() {
    const mouse = {id: 1, productName:'HAVIT HV-G92 Gamepad', salePrice:'120', originalPrice:'160', score:'5', reviews:'88', image: '../../../public/mouse.png' }
    const mouse2= {id: 2, productName:'HAVIT HV-G92 Gamepad', salePrice:'160', originalPrice:'160', score:'5', reviews:'88', image: '../../../public/mouse.png' }
    return (
        <div className="wrapper">
            <h1>Home page</h1>
            <Slider/>

            <div className='cards-grid'>
                <ProductCard  props={mouse}/>
                <ProductCard  props={mouse2}/>
                <ProductCard  props={mouse}/>
                <ProductCard  props={mouse}/>
            </div>
        </div>
    )
}

export default Home

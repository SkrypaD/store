import ProductCard from "../../Components/ProductCard"

function Wishlist(){
    const mouse = {id: 1, productName:'HAVIT HV-G92 Gamepad', salePrice:'120', originalPrice:'160', score:'5', reviews:'88', image: '../../../public/mouse.png' }
    const mouse2= {id: 2, productName:'HAVIT HV-G92 Gamepad', salePrice:'160', originalPrice:'160', score:'5', reviews:'88', image: '../../../public/mouse.png' }
    return (
        <div className="wrapper">
            <div className="products-element">
                <div className="products-element-title">
                    <span>Whislist (number) </span>
                    <button className="black-btn">Move All to Bag</button>
                </div>
                <div className="cards-grid">
                    <ProductCard  wishlist={true} props={mouse}/>
                    <ProductCard  wishlist={true} props={mouse2}/>
                    <ProductCard  wishlist={true} props={mouse}/>
                    <ProductCard  wishlist={true} props={mouse}/>
                </div>
            </div>
            <div className="products-element">
                <div className="products-element-title">
                    <span className="red-title">Just For You</span>
                    <button className="black-btn">See All</button>
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


export default Wishlist

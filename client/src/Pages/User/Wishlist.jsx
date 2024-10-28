import ProductCard from "../../Components/ProductCard"


{
    /*
        * TODO: decide on how to save items to wishlist,
        * Thoughts: Now that i think about it, probably i will save it in user table in db so user will be able to get access to it from anywhere
        *
        * TODO: number in wishlist should be taken from the length of items in wishlist
        * TODO: get rid of hardcoded ProductCards and make it show all the cards that are in wishlist
    */
}
function Wishlist(){
    const mouse = {id: 1, productName:'HAVIT HV-G92 Gamepad', salePrice:'120', originalPrice:'160', score:'5', reviews:'88', image: '../../../public/mouse.png' }
    const mouse2= {id: 2, productName:'HAVIT HV-G92 Gamepad', salePrice:'160', originalPrice:'160', score:'5', reviews:'88', image: '../../../public/mouse.png' }
    return (
        <div className="wrapper">
            <div className="products-element">
                <div className="products-element-title">
                    <span>Whislist (4) </span>
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

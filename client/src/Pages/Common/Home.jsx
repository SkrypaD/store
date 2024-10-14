import {Link, Outlet, useLoaderData} from "react-router-dom"
import Slider from "../../Components/HomeComponents/Slider"
import ProductCard from "../../Components/ProductCard"

function Home() {
    const data = useLoaderData()
    console.log(data)
    return (
        <>
            <h1>Home page</h1>
            <Slider/>
            <ProductCard/>
        </>
    )
}

export default Home

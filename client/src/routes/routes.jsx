import {commonPages, userPages} from '../Pages'
import loaders from  './loaders.js'

const commontRoute = [
    {
        path: '/',
        element: <commonPages.Home/>,
        loader: loaders.homeLoader
    },
    {
        path: '/about',
        element: <commonPages.About/>,
    },
    {
        path: '/contact',
        element: <commonPages.Contact/>
    },
    {
        path: '/signup',
        element: <commonPages.SignUp/>
    },
    {
        path: '/login',
        element: <commonPages.LogIn/>
    },
    {
        path: '/productdetails/:id',
        element: <commonPages.ProductDetails/>
    },
]

const userRoute = [
    {
        path: '/account',
        element: <userPages.Account/>
    },
    {
        path: '/checkout',
        element: <userPages.CheckOut/>
    },
    {
        path: '/wishlist',
        element: <userPages.Wishlist/>
    },
]

const adminRoute = [ ]

export default {
    commontRoute,
    userRoute,
    adminRoute
}

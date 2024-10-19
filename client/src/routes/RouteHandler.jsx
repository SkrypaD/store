import {
    createBrowserRouter,
    RouterProvider,
}from 'react-router-dom'

import routes from './routes.jsx'
import { layout } from '../layout/index.jsx'

function RouteHandler() {
    const router = createBrowserRouter([
        {
            path:'/',
            element: <layout.Layout/>,
            children:[...routes.commontRoute, ...routes.userRoute]
        }
    ])
    return <RouterProvider router={router}/>
}


export default RouteHandler

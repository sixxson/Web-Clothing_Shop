import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from '../pages/home/Home'
import CategoryPage from "../pages/category/CategoryPage"
import Search from "../components/Search"
import Shop from "../pages/shop/Shop"
import ProductDetails from "../pages/shop/productDetails/ProductDetails"
import Login from "../components/Login"
import Register from "../components/Register"

const router = createBrowserRouter([
    {
        path: '/',
        element:<App />,
        children:[
            {
                path: '/',
                element:<Home />
            },
            {
                path:'/categories/:categoryName',
                element: <CategoryPage />
            },
            {
                path: '/search',
                element: <Search />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path:'/shop/:id',
                element: <ProductDetails/>
            },
            {
                path: '/about',
                element: <h1>About</h1>
            },
            {
            path: '/contact',
                element: <h1>Contact</h1>
            },
            {
                path: '/login',
                element:<Login />
            },
            {
                path: '/register',
                element:<Register />
            }
        ]
    }
])

export default router
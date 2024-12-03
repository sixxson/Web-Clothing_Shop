import { ChevronRight, ShoppingBag, ShoppingCart } from 'lucide-react'
import { productData } from '../../../data'
import RatingStars from '../../../components/RatingStars'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/features/cart/cartSlice'

export default function ProductDetails() {
    const dispatch = useDispatch()
    const { _id } = useParams()
    const product = productData.find(product => product._id === _id)
    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    return (
        <>
            {/* header Pages */}
            <section className="section__container rounded-lg bg-primary-light">
                <h2 className="section__header capitalize">Product Details</h2>
                <p className="section__subheader flex justify-center items-center">
                    <span className='hover:text-primary-dark'>Home</span>
                    <ChevronRight size={15} />
                    <span className='hover:text-primary'>Shop</span>
                    <ChevronRight size={15} />
                    Product
                </p>
            </section>
            {/* content Pages */}
            <section className="section__container mt-8">
                <div className="flex flex-col md:flex-row gap-10 items-center">
                    {/* product image */}
                    <div className="w-full md:w-1/2">
                        <img
                            className='rounded-lg w-full h-auto'
                            src={product.image} alt={product.name} />
                    </div>
                    <div className='w-full md:w-1/2'>
                        <h3 className='text-2xl font-bold mb-4 capitalize'>
                            {product.name}
                        </h3>
                        <p className='text-xl capitalize mb-4'>
                            <strong>
                                price: $ {product.price}
                            </strong>
                        </p>

                        <div className='flex flex-col gap-2' >
                            <p>
                                <strong>
                                    Category:
                                </strong>
                                {product.category}
                            </p>
                            <div className='flex items-center gap-2'>
                                <p>
                                    <strong>
                                        Color:
                                    </strong>
                                </p>
                                <div className='w-10 h-10 rounded-lg'
                                    style={{ backgroundColor: `${product.color}` }}></div>

                            </div>
                            <div className='flex items-center gap-5'>
                                <strong>Ratings</strong>
                                <RatingStars rating={4} />
                            </div>
                            <p className='text-gray-500 mb-4'>
                                {product.description}
                            </p>
                        </div>
                        <div className='flex gap-8'>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation()
                                    handleAddToCart(product)
                                }}
                                className='bg-primary-light text-primary hover:bg-primary-dark 
                            hover:text-white font-semibold capitalize flex gap-2 items-center transition-all duration-300 py-2 rounded-md px-4 '>
                                <ShoppingCart />
                                add to cart
                            </button>
                            <button className=' bg-red-500 text-white py-2 rounded-md 
                            hover:bg-red-600 flex items-center gap-2 capitalize transition-all duration-300 px-5'>
                                <ShoppingBag />
                                buy now
                            </button>
                        </div>
                    </div>
                </div>

            </section>

            {/* Comment  */}
            <section className='section__container mt-8'>
                Comment Here
            </section>
        </>
    )
}
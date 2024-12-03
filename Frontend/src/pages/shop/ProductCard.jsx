
import { Heart, ShoppingBag } from 'lucide-react'
import { TbShoppingBagPlus } from 'react-icons/tb'
import PropTypes from 'prop-types'
import RatingStars from '../../components/RatingStars'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../../redux/features/cart/cartSlice'

export default function ProductCard({ products }) {
    const dispatch = useDispatch()

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }
    
    return (
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product, i) => (
                <div key={i} className="product__card">
                    <div className='group relative  overflow-hidden'>
                        <Link to={`/shop/${product._id}`}>
                            <img src={product.image} alt={product.name}
                                className="max-h-96 md:h-64 w-full object-cover hover:scale-105
                            transition-all duration-300 rounded-lg " />
                        </Link>
                        <div className="pointer-events-none absolute top-3 right-3  translate-y-full opacity-0 transition-all 
                        duration-500 ease-in-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 flex flex-col gap-2">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation()
                                    handleAddToCart(product)
                                }}>
                                <TbShoppingBagPlus size={35} className='r-shopping-cart-2-line bg-primary 
                                p-1.5 text-white rounded-lg hover:bg-primary-dark' />
                            </button>
                            <button>
                                <Heart size={35} className='r-shopping-cart-2-line bg-primary 
                                p-1.5 text-white rounded-lg hover:bg-primary-dark' />
                            </button>
                            <button>
                                <ShoppingBag size={35} className='r-shopping-cart-2-line bg-primary 
                                p-1.5 text-white rounded-lg hover:bg-primary-dark'/>
                            </button>
                        </div>
                    </div>
                    {/* product description */}
                    <div className='product__card__content'>
                        <h4>{product.name}</h4>
                        <p>$ {product.price} {product?.oldPrice
                            ? <s>${product?.oldPrice}</s>
                            : null}
                        </p>
                        <RatingStars rating={product.rating} />
                    </div>
                </div>
            ))}
        </div>
    )
}

ProductCard.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
            oldPrice: PropTypes.number,
            raing: PropTypes.any // This seems to be a typo, but included as it's in the original code
        })
    ).isRequired
}

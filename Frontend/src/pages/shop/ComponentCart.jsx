import { Minus, Plus, X } from 'lucide-react'
import PropTypes from 'prop-types'
import OrderSummary from './OrderSummary'
import { useDispatch } from 'react-redux'
import { removeFromCart, updateQuantity } from '../../redux/features/cart/cartSlice'
import { Link } from 'react-router-dom'

ComponentCart.propTypes = {
    products: PropTypes.array.isRequired,
    isOpen: PropTypes.bool.isRequired,
    isClose: PropTypes.func.isRequired,
}

export default function ComponentCart({ products, isOpen, isClose }) {
    // Use isOpen in a conditional rendering
    const dispatch = useDispatch()

    const handleUpdateCart = (type, _id) => {
        const payload = { type, _id }
        dispatch(updateQuantity(payload))
    }

    const handleRemoveItem = (e, _id) => {
        e.preventDefault()
        dispatch(removeFromCart({ _id }));
    }
    return (
        <div className={`fixed z-[1000] right-0 inset-0 bg-black bg-opacity-50 transition-opacity 
            ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            style={{ transion: 'opacity 0.3s ease-in-out' }}
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    isClose()
                }
            }}>

            {/* Cart content */}
            <div className={`fixed top-0 right-0 h-full lg:w-2/5 md:w-2/3 w-full bg-white shadow-lg transition-transform
            overflow-y-auto transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                style={{ transform: 'transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94)' }}>
                <div className='p-4 mt-4 flex justify-between items-center'>
                    <h4 className='text-xl font-semibold'>Something</h4>
                    <button onClick={() => isClose()}>
                        <X className='text-gray-400/70  hover:text-primary' size={40} />
                    </button>
                </div>
                <div className="cart-items overflow-y-auto lg:max-h-[700px] max-h-[650px]">
                    {products.length === 0
                        ? (
                            <div className='flex flex-col items-center justify-center gap-10 mt-[50%]'>
                                <h1 className='capitalize text-5xl text-center font-bold text-primary'> your cart emty </h1>
                                <Link to={`/shop`} onClick={() => isClose()} className='text-primary-light text-3xl text-center bg-primary rounded-lg px-5 py-3'>Go Buy Now</Link>
                            </div>
                        )
                        : (
                            products.map((product, i) => (
                                <div className='flex flex-row gap-2 items-center
                                    justify-between shadow-md p-3 mb-4' key={i} >
                                    <span className='text-white bg-primary rounded-full px-2'>{i + 1}</span>
                                    <img src={product.image} alt={product.name} className='w-20 h-20 object-cover' />
                                    <div className='flex flex-col'>
                                        <h4>
                                            {product.name}
                                        </h4>
                                        <p className='text-sm text-gray-600/70'>
                                            {product.category}, {product.color}
                                        </p>
                                    </div>
                                    <div className='flex items-center gap-2 justify-center'>
                                        <button
                                            onClick={() => {

                                                handleUpdateCart('increment', product._id)
                                            }}
                                            className='hover:text-red-400 bg-slate-400/70 rounded-lg hover:bg-slate-500'>
                                            <Plus />
                                        </button>
                                        <span>{product.quantity}</span>
                                        <button
                                            onClick={() => {

                                                handleUpdateCart('decrement', product._id)
                                            }} className='hover:text-red-400 bg-slate-400/70 rounded-lg hover:bg-slate-500'>
                                            <Minus />
                                        </button>
                                    </div>
                                    <p>{product.price}</p>
                                    <button
                                        onClick={(e) => {
                                            handleRemoveItem(e, product._id)
                                        }}
                                        className='hover:text-primary'>
                                        <X />
                                    </button>
                                </div>
                            ))
                        )}
                </div>

                {/* Order Summary */}
                <div className='fixed bottom-0 w-full'>
                    {products.length > 0 &&
                        (<OrderSummary />)
                    }
                </div>
            </div>
        </div>
    )
}

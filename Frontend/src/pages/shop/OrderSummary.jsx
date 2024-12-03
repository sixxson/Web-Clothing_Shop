import { ShoppingBag, Trash2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../redux/features/cart/cartSlice';
export default function OrderSummary() {
    const dispatch = useDispatch()
    const { tax, taxRate, grandTotal, totalPrice, selectedItem } = useSelector((state) => state.cart)
    // const products = useSelector((state) => state.cart.products);
    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className="bg-primary-light mt-5 rounded-md text-base">
            <div className='px-6 py-4 space-x-5'>
                <h2 className='text-xl font-semibold text-text-dark'>
                    Order Summary
                </h2>
                <p className='text-text-dark mt-2'>
                    Selected Item: {selectedItem}
                </p>
                <p>
                    Total Price : {totalPrice.toFixed(2)}
                </p>
                <p>
                    Tax: ({taxRate * 100}%) : $ {tax.toFixed(2)}
                </p>
                <h3 className='font-bold'>
                    Grand Total: $ {grandTotal.toFixed(2)}
                </h3>
            </div>
            <div className='flex '>
                <button
                    onClick={(e) => {
                        e.stopPropagation()
                        handleClearCart()
                    }}
                    className='w-full justify-between flex gap-2 bg-red-500 text-white p-4 rounded-l-md hover:bg-red-600'>
                    Clear Cart <Trash2 />
                </button>
                <button className='w-full justify-between flex gap-2 bg-cyan-500 text-white p-4 rounded-r-md hover:bg-cyan-600'>
                    Checkout <ShoppingBag />
                </button>
            </div>
        </div>
    )
}

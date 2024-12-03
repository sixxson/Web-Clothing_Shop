import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    selectedItem: 0,
    totalPrice: 0,
    tax: 0,
    taxRate: 0.05,
    grandTotal: 0,

}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isExist = state.products.find((product) => product._id === action.payload._id)
            if (!isExist) {
                state.products.push({ ...action.payload, quantity: 1 })
            } else if(isExist){
                console.log("Items already addded");
                isExist.quantity += 1
            }
            state.selectedItem = setSelectedItem(state)
            state.totalPrice = setTotalPrice(state)
            state.tax = setTax(state)
            state.grandTotal = setGrandTotal(state)
        },
        updateQuantity: (state, action) => {
            state.products = state.products.map((product) => {
                if (product._id === action.payload._id) {
                    if (action.payload.type === "increment") {
                        product.quantity += 1
                    }
                    else if (action.payload.type === "decrement" && product.quantity > 1) {
                        product.quantity -= 1
                    }
                }
                return product
            })
            state.selectedItem = setSelectedItem(state)
            state.totalPrice = setTotalPrice(state)
            state.tax = setTax(state)
            state.grandTotal = setGrandTotal(state)
        },
        removeFromCart: (state, action) => {
            state.products = state.products.filter((product) => product._id !== action.payload._id)
            state.selectedItem = setSelectedItem(state)
            state.totalPrice = setTotalPrice(state)
            state.tax = setTax(state)
            state.grandTotal = setGrandTotal(state)
        },
        clearCart: (state) => {
            state.products = []
            state.selectedItem = 0
            state.totalPrice = 0
            state.tax = 0
            state.grandTotal = 0
        }
    },
})
export const setSelectedItem = (state) => state.products.reduce((total, product) => {
    return Number(total + product.quantity)
}, 0)

export const setTotalPrice = (state) => state.products.reduce((total, product) => {
    return Number(total + product.quantity * product.price)
}, 0)

export const setGrandTotal = (state) => {
    return setTotalPrice(state) + setTotalPrice(state) * state.taxRate
}
export const setTax = (state) => setTotalPrice(state) * state.taxRate

export const { addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
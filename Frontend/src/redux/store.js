
import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/cart/cartSlice'
import authApi from './features/auths/AuthApi'
import authReducer from './features/auths/authSlice'

export default configureStore({
    reducer: {
        cart: cartSlice,
        [authApi.reducerPath]: authApi.reducer,
        auth: authReducer

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware)
    
})
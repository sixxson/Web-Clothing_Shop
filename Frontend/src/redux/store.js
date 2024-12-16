
import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './features/cart/cartSlice'
import authApi from './features/auths/AuthApi'
import authReducer from './features/auths/authSlice'
import productsApi from './features/prducts/productsApi'

export default configureStore({
    reducer: {
        cart: cartSlice,
        [authApi.reducerPath]: authApi.reducer,
        auth: authReducer,
        [productsApi.reducerPath] : productsApi.reducer

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware, productsApi.middleware)

})
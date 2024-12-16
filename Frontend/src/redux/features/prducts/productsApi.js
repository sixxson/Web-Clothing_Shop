import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/product`,
        credentials: 'include'
    }),
    tagTypes: ['Products'],
    endpoints: (builder) => ({
        // get all products
        fetchAllProducts: builder.query({
            query: ({
                category,
                color,
                minPrice,
                maxPrice,
                page = 1,
                limit = 10,
            }) => {
                const queryParams = new URLSearchParams({
                    category: category || '',
                    color: color || '',
                    minPrice: minPrice || 0,
                    maxPrice: maxPrice || '',
                    page: page.toString(),
                    limit: limit.toString(),
                }).toString();
                return `/?${queryParams}`;

            },
            providesTags: ['Products']
        }),

        // get single product
        fetchProductById: builder.query({
            query: (id) => ({
                url: `/${id}`,
                method: 'GET',
            }),
            providesTags: (result, error, id) => [{ type: 'Products', id }]
        }),

        // create a product
        addProduct: builder.mutation({
            query: (newProduct) => ({
                url: '/create-product',
                method: 'POST',
                body: newProduct,
                credentials: 'include'
            }),
            invalidatesTags: ['Products']
        }),

        fetchRelatedProduct: builder.query({
            query: (id) => `/related/${id}`,
        }),

        // update a product
        updateProduct: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: `/update-product/${id}`,
                method: 'PATCH',
                body: rest,
                credentials: 'include',
            }),
            invalidatesTags: ['Products']
        }),

        // delete a product
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
                credentials: 'include'
            }),
            invalidatesTags: (result, error, id) => [{ type: 'Products', id }]
        })
    })
})

export const {
    useFetchAllProductsQuery,
    useFetchProductByIdQuery,
    useFetchRelatedProductQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation
} = productsApi
export default productsApi
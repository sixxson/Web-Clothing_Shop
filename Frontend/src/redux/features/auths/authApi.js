import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const authApi = createApi({
    reducerPath: 'authApi',
    // Cấu hình cơ bản cho các yêu cầu HTTP
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/auth`,
        credentials: 'include',
        prepareHeaders: (headers) => {
            headers.set('Accept', 'application/json');
            return headers;
        },
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        // Endpoint đăng ký người dùng mới
        register: builder.mutation({
            query: (newUser) => ({
                url: '/register',
                method: 'POST',
                body: newUser,
            }),
        }),

        // Endpoint đăng nhập
        login: builder.mutation({
            query: (credentials) => ({
                url: '/login',
                method: 'POST',
                body: credentials,
            }),
        }),

        // Endpoint đăng xuất
        logout: builder.mutation({
            query: () => ({
                url: '/logout',
                method: 'POST',
            }),
        }),

        // Endpoint lấy thông tin người dùng đã đăng nhập
        getUser: builder.query({
            query: () => ({
                url: '/users',
                method: 'GET',
            }),
            refetchOnMount: true, // Tự động lấy lại dữ liệu khi component được mount lại
            invalidatesTags: ['User'], // Đánh dấu các tag để xác định khi nào dữ liệu cần được cập nhật
        }),

        // Endpoint cập nhật thông tin người dùng
        updateUser: builder.mutation({
            query: ({ userId, updatedUser }) => ({
                url: `/users/${userId}`,
                method: 'PATCH',
                body: updatedUser,
            }),
            refetchOnMount: true,
            invalidatesTags: ['User'],
        }),

        // Endpoint edit role user
        editRole: builder.mutation({
            query: ({ userId, role }) => ({
                url: `/users/${userId}`,
                method: 'PUT',
                body: { role },
            }),
            invalidatesTags: ['User'],
        }),

        // Endpoint xóa người dùng
        deleteUser: builder.mutation({
            query: (userId) => ({
                url: `/users/${userId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['User'],
        })
    }),
});

export const {
    useRegisterMutation,
    useLoginMutation,
    useLogoutMutation,
    useGetUserQuery,
    useUpdateUserMutation,
    useEditRoleMutation,
    useDeleteUserMutation,
} = authApi;
export default authApi;

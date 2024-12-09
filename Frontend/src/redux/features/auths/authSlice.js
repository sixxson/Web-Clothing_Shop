import { createSlice } from "@reduxjs/toolkit";

const loadUserFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('user');
        if (!serializedState || serializedState === "undefined") {
            return { user: null };
        }
        return JSON.parse(serializedState);
    } catch (error) {
        console.error("Error loading user from localStorage:", error);
        return { user: null };
    }
};

const initialState = loadUserFromLocalStorage();

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(state.user)); // Fixed this line
        },
        logout: (state) => {
            state.user = null;
            localStorage.removeItem('user'); 
        }
    }
})

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
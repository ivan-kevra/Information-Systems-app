import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type LoginState = {
    isAuthenticated: boolean
    user: {
        name: string
        familyName: string
    } | null,
    token: string | null
}
const initialState: LoginState = {
    isAuthenticated: false,
    user: null,
    token: null
};

const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ name: string; familyName: string }>) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        isAuthenticated: (state, action: PayloadAction<boolean>) => {
            state.isAuthenticated = action.payload
        }
    }
})

export const authReducer = slice.reducer;
export const authActions = slice.actions

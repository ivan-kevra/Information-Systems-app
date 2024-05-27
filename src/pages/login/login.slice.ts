import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type LoginState = {
  isAuthenticated: boolean
  token: null | string
  user: {
    familyName: string
    name: string
  } | null
}
const initialState: LoginState = {
  isAuthenticated: false,
  token: null,
  user: null,
}

const slice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    isAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload
    },
    login: (state, action: PayloadAction<{ familyName: string; name: string }>) => {
      state.isAuthenticated = true
      state.user = action.payload
    },
  },
})

export const authReducer = slice.reducer
export const authActions = slice.actions

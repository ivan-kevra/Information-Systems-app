import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type ProfileState = {
  familyName: string
  fatherName: string
  identificationCode: string
  login: string
  mail: string
  name: string
  password: string
  phone: string
}
const initialState: ProfileState = {
  familyName: 'Фамилия',
  fatherName: '',
  identificationCode: '1234455РВ88',
  login: 'login',
  mail: '',
  name: 'Имя',
  password: '1234',
  phone: '',
}

const slice = createSlice({
  initialState,
  name: 'profile',
  reducers: {
    updateProfile: (state, action: PayloadAction<Partial<ProfileState>>) => {
      return { ...state, ...action.payload }
    },
  },
})

export const profileReducer = slice.reducer
export const profileActions = slice.actions

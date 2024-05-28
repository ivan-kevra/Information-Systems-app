import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type ProfileState = {
  name: string
  familyName: string
  fatherName: string
  identificationCode: string
  login: string
  mail: string
  phone: string
  password: string
}
const initialState: ProfileState = {
  name: 'Имя',
  familyName: 'Фамилия',
  fatherName: 'Отчество',
  identificationCode: '1234455РВ88',
  login: 'login',
  mail: '',
  phone: '',
  password: '1234',
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

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'

import { AppRootStateType } from '@/app/store'
import { ArrowLeft } from '@/assets/icons/arrowLeft'
import { Button } from '@/components/button'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { TextField } from '@/components/textField'
import { Typography } from '@/components/typography'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'

import styles from './login.module.scss'

import { authActions } from './login.slice'

export const Login = () => {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state: AppRootStateType) => state.auth.isAuthenticated)

  useEffect(() => {
    const token = sessionStorage.getItem('token')

    if (token) {
      const decoded: any = jwtDecode(token)
      const expirationDate = new Date(decoded.exp * 1000)
      const currentDate = new Date()

      if (currentDate > expirationDate) {
        dispatch(authActions.isAuthenticated(false))
      } else {
        dispatch(authActions.isAuthenticated(true))
      }
    }
  }, [])

  const getToken = (credentialResponse: any) => {
    const decoded: any = jwtDecode(credentialResponse.credential || '')

    dispatch(
      authActions.login({
        familyName: decoded.family_name,
        name: decoded.given_name,
      })
    )
    sessionStorage.setItem('token', credentialResponse.credential)
  }

  if (isAuthenticated) {
    return <Navigate to={'/'} />
  }

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Link className={styles.link} to={'/'}>
          <ArrowLeft />
          Вернуться на главную
        </Link>
        <Typography as={'h1'} variant={'h1'}>
          Вход
        </Typography>
        <div className={styles.inputs}>
          <TextField label={'Логин'} placeholder={'Введите логин'} />
          <TextField label={'Пароль'} placeholder={'Введите пароль'} variant={'password'} />
          <Button className={styles.button}>Вход</Button>

          <Button className={styles.button} variant={'white'}>
            Авторизация с использованием ЕС ИФЮЛ
          </Button>
          <div className={styles.googleLogin}>
            <GoogleLogin
              onError={() => {
                alert('Login Failed')
              }}
              onSuccess={getToken}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { AppRootStateType } from '@/app/store'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Typography } from '@/components/typography'
import { jwtDecode } from 'jwt-decode'

import styles from './mainPage.module.scss'

import { authActions } from '../login/login.slice'

export const MainPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')

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

  const isAuthenticated = useSelector((state: AppRootStateType) => state.auth.isAuthenticated)

  const logout = () => {
    localStorage.removeItem('token')
    window.location.reload()
  }

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Typography variant={'h1'}>Главная страница</Typography>
        <Typography>
          В задании не было главной страницы и я решил сделать ее для удобства в навигации между
          страницами
        </Typography>

        <div className={styles.links}>
          <Link to={'/personalArea'}>Личный кабинет</Link>
          <Link to={'/profile'}>Профиль</Link>
          {isAuthenticated && (
            <Link onClick={logout} to={'/login'}>
              Выйти из аккаунта
            </Link>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

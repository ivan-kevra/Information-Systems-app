import { Header } from '@/components/header'
import styles from './mainPage.module.scss'
import { Footer } from '@/components/footer'
import { Typography } from '@/components/typography'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from '@/app/store'
import { useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'
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

        <Typography variant={'body1'}>
          В задании не было главной страницы и я решил сделать ее для удобства в навигации между
          страницами
        </Typography>

        <div className={styles.links}>
          <Link className={styles.link} to={'/personalArea'}>
            Личный кабинет
          </Link>
          <Link className={styles.link} to={'/profile'}>
            Профиль
          </Link>
          {isAuthenticated && (
            <Link className={styles.link} to={'/profile'} onClick={logout}>
              Выйти из аккаунта
            </Link>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

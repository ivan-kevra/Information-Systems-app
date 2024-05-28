import { Header } from '@/components/header'
import styles from './mainPage.module.scss'
import { Footer } from '@/components/footer'
import { Typography } from '@/components/typography'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AppRootStateType } from '@/app/store'


export const MainPage = () => {

    const logout = () => {
        localStorage.removeItem('token')
        window.location.reload()
    }
    const isAuthenticated = useSelector((state: AppRootStateType) => state.auth.isAuthenticated)
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
                    {isAuthenticated && <Link className={styles.link} to={'/profile'} onClick={logout}>
                        Выйти из аккаунта
                    </Link>}
                </div>
            </div>

            <Footer />
        </div>
    )
}

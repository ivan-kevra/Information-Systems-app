import { Header } from '@/components/header'
import styles from './mainPage.module.scss'
import { Footer } from '@/components/footer'
import { Typography } from '@/components/typography'
import { Link } from 'react-router-dom'

export const MainPage = () => {
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
                    <Link className={styles.link} to={'/tableSystem'}>
                        Реестры
                    </Link>
                    <Link className={styles.link} to={'/profile'}>
                        Личный кабинет
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    )
}

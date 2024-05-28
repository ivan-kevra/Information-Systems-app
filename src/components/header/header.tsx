import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { AppRootStateType } from '@/app/store'
import arrowDown from '@/assets/icons/arrowDown.svg'
import blueNotifications from '@/assets/icons/blueNotifications.svg'
import logo from '@/assets/icons/logo.svg'
import notifications from '@/assets/icons/notifications.svg'
import photo from '@/assets/icons/photo.svg'
import userPhoto from '@/assets/icons/userPhoto.svg'

import styles from './header.module.scss'

import { Typography } from '../typography'
export const Header = () => {
  const isAuthenticated = useSelector((state: AppRootStateType) => state.auth.isAuthenticated)
  const name = useSelector((state: AppRootStateType) => state.profile.name)
  const familyName = useSelector((state: AppRootStateType) => state.profile.familyName)

  return (
    <div className={styles.container}>
      <img src={logo} />
      <div className={styles.nav}>
        <Typography variant={'body1'}>Меню</Typography>
        <Typography variant={'body1'}>Вопросы и ответы</Typography>
        <Typography variant={'body1'}>Об АИС</Typography>
      </div>
      <div className={styles.profileAndNotifications}>
        {isAuthenticated ? (
          <div className={styles.notesContainer}>
            <Typography className={styles.notesText} variant={'body1'}>
              4
            </Typography>
            <img src={blueNotifications} />
          </div>
        ) : (
          <img src={notifications} />
        )}
        <div className={styles.line}></div>

        <div className={styles.profile}>
          {isAuthenticated ? <img className={styles.photo} src={photo} /> : <img src={userPhoto} />}
          {isAuthenticated ? (
            <Typography variant={'body1'}>
              {name} {familyName}
            </Typography>
          ) : (
            <Link style={{ textDecoration: 'none' }} to={'/login'}>
              <Typography variant={'body1'}>Вход в аккаунт</Typography>
            </Link>
          )}

          <img src={arrowDown} />
        </div>
      </div>
    </div>
  )
}

import arrowDown from '@/assets/icons/arrowDown.svg'
import logo from '@/assets/icons/logo.svg'
import notifications from '@/assets/icons/notifications.svg'
import userPhoto from '@/assets/icons/userPhoto.svg'

import styles from './header.module.scss'

import { Typography } from '../typography'
import { useSelector } from 'react-redux'
import { AppRootStateType } from '@/app/store'
import { Link } from 'react-router-dom'
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
        <img src={notifications} />
        <div className={styles.line}></div>

        <div className={styles.profile}>
          <img src={userPhoto} />
          {isAuthenticated ? (
            <Typography variant={'body1'}>
              {name} {familyName}
            </Typography>
          ) : (
            <Link to={'/login'} style={{ textDecoration: 'none' }}>
              <Typography variant={'body1'}>Вход в аккаунт</Typography>
            </Link>
          )}

          <img src={arrowDown} />
        </div>
      </div>
    </div>
  )
}

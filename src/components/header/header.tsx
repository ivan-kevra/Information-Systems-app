import logo from "@/assets/icons/logo.svg"
import styles from "./header.module.scss"
import { Typography } from "../typography"
import notifications from "@/assets/icons/notifications.svg"
import userPhoto from "@/assets/icons/userPhoto.svg"
import arrowDown from "@/assets/icons/arrowDown.svg"
export const Header = () => {
    return <div className={styles.container}>
        <img src={logo} />
        <div className={styles.nav}>
            <Typography variant="body1">Меню</Typography>
            <Typography variant="body1">Вопросы и ответы</Typography>
            <Typography variant="body1">Об АИС</Typography>
        </div>
        <div className={styles.profileAndNotifications}>
            <img src={notifications} />
            <div className={styles.line}></div>
            <div className={styles.profile}>
                <img src={userPhoto} />
                <Typography variant="body1">Вход в аккаунт</Typography>
                <img src={arrowDown} />
            </div>
        </div>
    </div>
}
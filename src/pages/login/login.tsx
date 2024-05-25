
import { Header } from "@/components/header"
import styles from "./login.module.scss"
import { Footer } from "@/components/footer"
import { Typography } from "@/components/typography"
import { TextField } from "@/components/textField"
import { Button } from "@/components/button"

export const Login = () => {
    return <div className={styles.container}>
        <Header />
        <div className={styles.content}>
            <Typography variant="h1" as="h1">Вход</Typography>
            <div className={styles.inputs}>
                <TextField label="Логин" placeholder="Введите логин" />
                <TextField label="Пароль" placeholder="Введите пароль" type="password" />
                <Button>Вход</Button>
                <Button variant="white">Авторизация с использованием ЕС ИФЮЛ</Button>
            </div>
        </div>
        <Footer />
    </div>
}
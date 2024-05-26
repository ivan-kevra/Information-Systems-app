
import { Header } from "@/components/header"
import styles from "./login.module.scss"
import { Footer } from "@/components/footer"
import { Typography } from "@/components/typography"
import { TextField } from "@/components/textField"
import { Button } from "@/components/button"
import { useDispatch, useSelector } from 'react-redux';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { authActions } from "./login.slice"
import { AppRootStateType } from "@/app/store"
import { Link, Navigate } from "react-router-dom"
import { useEffect } from "react"
import { ArrowLeft } from "@/assets/icons/arrowLeft"

export const Login = () => {

    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state: AppRootStateType) => state.auth.isAuthenticated)

    useEffect(() => {
        const token = sessionStorage.getItem("token")
        if (token) {
            const decoded: any = jwtDecode(token);
            const expirationDate = new Date(decoded.exp * 1000);
            const currentDate = new Date();
            if (currentDate > expirationDate) {
                dispatch(authActions.isAuthenticated(false))
            } else {
                dispatch(authActions.isAuthenticated(true))
            }
        }
    }, [])

    const getToken = (credentialResponse: any) => {
        const decoded: any = jwtDecode(credentialResponse.credential || '');
        dispatch(authActions.login({
            name: decoded.given_name,
            familyName: decoded.family_name
        }))
        sessionStorage.setItem("token", credentialResponse.credential);
    }

    if (isAuthenticated) {
        return <Navigate to="/" />
    }
    return <div className={styles.container}>
        <Header />

        <div className={styles.content}>
            <Link to={'/'} className={styles.link}><ArrowLeft />Вернуться на главную</Link>
            <Typography variant="h1" as="h1">Вход</Typography>
            <div className={styles.inputs}>
                <TextField label="Логин" placeholder="Введите логин" />
                <TextField label="Пароль" placeholder="Введите пароль" variant="password" />
                <Button className={styles.button}>Вход</Button>

                <Button variant="white" className={styles.button}>Авторизация с использованием ЕС ИФЮЛ</Button>
                <div className={styles.googleLogin}>
                    <GoogleLogin
                        onSuccess={getToken}
                        onError={() => {
                            alert('Login Failed');
                        }}
                    />
                </div>

            </div>
        </div>
        <Footer />
    </div>
}


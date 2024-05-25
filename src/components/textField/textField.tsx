import { ChangeEvent, ComponentProps, forwardRef, useState } from 'react'

import { clsx } from 'clsx'

import styles from './textField.module.scss'
import { Typography } from '../typography'
import closedEye from "@/assets/icons/closedEye.svg"
import openedEye from "@/assets/icons/openedEye.svg"



export type Props = {
    className?: string
    errorMessage?: string
    label?: string
    onValueChange?: (value: string) => void
} & ComponentProps<'input'>

export const TextField = forwardRef<HTMLInputElement, Props>((props, ref) => {
    const {
        className,
        errorMessage,
        label = '',
        onValueChange,
        placeholder,
        type,
        ...restProps
    } = props

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        onValueChange && onValueChange(event?.currentTarget.value)
    }

    const [showPassword, setShowPassword] = useState<boolean>(false)

    const isShowPasswordButtonShown = type === 'password'

    return (
        <div className={styles.container}>
            <Typography as={'label'} variant={'body2'} className={styles.label}>
                {label}
            </Typography>
            <div className={styles.inputContainer}>
                <input
                    className={styles.input}
                    onChange={onChangeTitle}
                    placeholder={placeholder}
                    ref={ref}
                    {...restProps}
                />
                {isShowPasswordButtonShown && (
                    <button
                        className={styles.showPassword}
                        onClick={() => setShowPassword(prev => !prev)}
                        type={'button'}
                    >
                        {showPassword ? <img src={openedEye} /> : <img src={closedEye} />}
                    </button>
                )}
            </div>
        </div>
    )
})
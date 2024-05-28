import { ComponentPropsWithoutRef, ElementType } from 'react'

import styles from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  variant?: 'blue' | 'link' | 'text' | 'white' | 'link'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const { as: Component = 'button', className, fullWidth, variant = 'blue', ...rest } = props

  return (
    <Component
      className={`${styles.button} ${styles[variant]} ${fullWidth ? styles.fullWidth : ''
        } ${className}`}
      {...rest}
    />
  )
}

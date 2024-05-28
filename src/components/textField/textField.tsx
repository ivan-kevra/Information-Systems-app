import { ChangeEvent, ComponentProps, forwardRef, useState } from 'react'

import styles from './textField.module.scss'
import { Typography } from '../typography'
import closedEye from '@/assets/icons/closedEye.svg'
import openedEye from '@/assets/icons/openedEye.svg'
import searchIcon from '@/assets/icons/searchIcon.svg'
import closeIcon from '@/assets/icons/closeIcon.svg'

export type Props = {
  className?: string
  errorMessage?: string
  label?: string
  onValueChange?: (value: string) => void
  variant?: 'default' | 'password' | 'search'
} & ComponentProps<'input'>

export const TextField = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    className,
    errorMessage,
    label = '',
    onValueChange,
    placeholder,
    type,
    variant = 'default',
    ...restProps
  } = props

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    onValueChange && onValueChange(event?.currentTarget.value)
  }

  const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
    <div className={styles.container + ' ' + className}>
      <Typography as={'label'} variant={'body2'}>
        {label}
      </Typography>
      <div className={styles.inputContainer + ' ' + className}>
        {variant === 'search' && <img src={searchIcon} />}
        <input
          type={variant === 'password' && !showPassword ? 'password' : 'text'}
          className={styles.input + ' ' + className}
          onChange={onChangeTitle}
          placeholder={placeholder}
          ref={ref}
          {...restProps}
        />
        {variant === 'search' && <img src={closeIcon} />}
        {variant === 'password' && (
          <img
            src={showPassword ? openedEye : closedEye}
            onClick={() => setShowPassword(prev => !prev)}
            className={styles.showPassword}
          />
        )}
      </div>
    </div>
  )
})

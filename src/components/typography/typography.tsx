import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import s from './typography.module.scss'

type Props<T extends ElementType> = {
    as?: T
    children?: ReactNode
    className?: string
    variant:
    | 'body1'
    | 'body2'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
}

export const Typography = <T extends ElementType = 'p'>(
    props: Omit<ComponentPropsWithoutRef<T>, keyof Props<T>> & Props<T>
) => {
    const { as: Component = 'p', className, variant = 'body1', ...rest } = props
    const classNames = clsx(s[variant], className)

    return <Component className={classNames} {...rest} />
}
import React, {ButtonHTMLAttributes} from 'react'
import s from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: (e: React.MouseEvent<HTMLElement>) => void
    children?: React.ReactChild | React.ReactNode
    btnClass?: string
    id?: string
}

const Button = ({children, onClick, btnClass, id}: ButtonProps) => {

    return (
        <button
            type='button'
            className={`${s.btnPrimary} ${btnClass ? s[btnClass] : ''}`}
            onClick={onClick}
            id={id}
        >
            {children}
        </button>
    )
}

export default Button

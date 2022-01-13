import React, {InputHTMLAttributes} from 'react'
import s from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value?: string,
    type: string,
    inputClass?: string,
    placeholder?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({value, type, inputClass, placeholder, onChange}: InputProps) => {
    return (
        <input
            className={`${s.input} ${inputClass ? s[inputClass] : ''}`}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}

export default Input
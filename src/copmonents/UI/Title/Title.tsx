import React from 'react'
import s from './Title.module.scss'

interface TitleProps {
    title: string
    titleClass?: string
}

const Title = ({title, titleClass}: TitleProps) => (
    <h1 className={`${s.title} ${titleClass ? s[titleClass] : ''}`}>
        {title}
    </h1>
)

export default Title
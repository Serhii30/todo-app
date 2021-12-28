import React from 'react';
import PropTypes from "prop-types";
import s from './Title.module.scss';

const Title = ({title, titleClass}) => (
    <h1 className={`${s.title} ${titleClass ? s[titleClass] : ''}`}>
        {title}
    </h1>
)

Title.propTypes = {
    title: PropTypes.string,
    titleClass: PropTypes.string
}

Title.defaultProps = {
    title: '',
    titleClass: ''
}

export default Title;
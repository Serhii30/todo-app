import React from 'react';
import PropTypes from "prop-types";
import s from './Input.module.scss'

const Input = ({value, type, placeholder, onChange, inputClass}) => (
    <input
        className={`${s.input} ${inputClass ? s[inputClass] : ''}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />
);

Input.propTypes = {
    value: PropTypes.string,
    type: PropTypes.string,
    inputClass: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
}

Input.defaultProps = {
    value: '',
    type: 'text',
    inputClass: '',
    placeholder: '',
    onChange: () => {
    },
}

export default Input;
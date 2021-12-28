import React from "react";
import s from './Button.module.scss'
import PropTypes from "prop-types";

const Button = ({children, onClick, btnClass, id}) => {

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

Button.propTypes = {
    children: PropTypes.node,
    btnClass: PropTypes.string,
    onClick: PropTypes.func,
    id: PropTypes.string
}

Button.defaultProps = {
    children: '',
    btnClass: '',
    id: '',
    onClick: () => {
    }
}

export default Button;

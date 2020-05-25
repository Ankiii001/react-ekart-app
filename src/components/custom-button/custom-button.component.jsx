import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({ children, isReset, inverted, ...otherProps }) => (
    <button className={`${inverted ? 'inverted' : ''}
    ${isReset ? 'reset-button' : ''} custom-button`}
        {...otherProps}
    >
        {children}
    </button>
)

export default CustomButton
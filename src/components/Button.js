import React from 'react'
import PropTypes from 'prop-types'

const Button = ({text, color,onClick}) => {
    return (
        <div>
             <button onClick={onClick} style={{backgroundColor:color, color:'white'}} 
             className="btn">{text}</button>
        </div>
    )
}

Button.defaultProps = {
    color:'blue'
}
Button.propTypes = {
    text:PropTypes.string.isRequired,
    color:PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired,
}

export default Button

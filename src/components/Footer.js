import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
            <p><strong>Built</strong> : 2021</p>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Footer

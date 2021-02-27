import PropTypes from 'prop-types'
import {useLocation} from 'react-router-dom'
import Button from './Button'

const Header = ({title,onAdd,showTask}) => {
    const location = useLocation()

    return (
        <header className="head-container">
            <h1>{title}</h1>
           {location.pathname === '/' && 
           <Button onClick={onAdd} 
           text={showTask ? 'Close' : 'Add'} 
           color={showTask ? 'red' : 'green'}/>}
        </header>
    )
}

Header.propTypes ={
    title : PropTypes.string.isRequired, 
} 
Header.defaultProps ={
    title : 'Tracker App'
}

export default Header

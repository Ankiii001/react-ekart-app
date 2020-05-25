import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { ReactComponent as Logo } from '../../assets/phone.svg'

import './header.styles.scss'

const Header = ( {currentUser, hidden} ) => {
    // const[currentUser,setCurrentUser]=useState({})
    const handleLogOut = ()=>{
        localStorage.clear()
        currentUser = null
    }
    return (
    <div className="header">
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to="/shop">
                SHOP
            </Link>
            <Link className='option' to="/shop">
                CONTACT
            </Link>
            {
                currentUser ?
                <div className='option' onClick={handleLogOut} >LOG OUT</div>
                :
                <Link className='option' to="/signin">
                LOG IN
                </Link>
            }
            <CartIcon />
        </div>
        {
            hidden? null: <CartDropdown />
        }
    </div>
)}

const mapStateTOProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})


export default connect(mapStateTOProps)(Header)
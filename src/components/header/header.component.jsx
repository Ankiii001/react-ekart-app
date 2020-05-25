import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {setCurrentUser} from '../../redux/user/user.actions'

import { ReactComponent as Logo } from '../../assets/phone.svg'

import './header.styles.scss'

const Header = ( {currentUser, hidden, setCurrentUser} ) => (
    <div className="header">
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to="/shop">
                SHOP
            </Link>
            {
                currentUser ?
                <div className='option' onClick={() => {
                    localStorage.clear()
                    setCurrentUser({ currentUser: null})
                }} >LOG OUT</div>
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
)

const mapStateTOProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateTOProps, mapDispatchToProps)(Header)
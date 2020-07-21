import React from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {createStructuredSelector} from 'reselect';
import {auth} from '../../firebase/firebase.utils';
import './header.styles.scss';
import { connect } from 'react-redux';
import {selectCurrentUser} from '../../redux/user/user.selectors.js';
import {selectHidden} from '../../redux/cart/cart.selectors.js'
import CartIcon from '../cart-icon/cart-icon.component';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';
const Header = ({currentUser, hidden}) => (
    <div className = 'header'>
        <Link to='/' className='logo-container'>
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
            <Link className='option' to='/shop'>Shop</Link>
            <Link className='option' to='/contact'>Contact</Link>

            {currentUser ?(
            <div className='option' onClick={()=>auth.signOut()}>Sign Out</div>
            ): (<Link className='option' to='/sign-in'>Sign In</Link>
            )}
            <CartIcon />
        </div>
        {hidden ? (null): <CartDropdown />}
        
    </div>
)

const mapStateToProps = state =>createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHidden
})

export default connect(mapStateToProps)(Header);
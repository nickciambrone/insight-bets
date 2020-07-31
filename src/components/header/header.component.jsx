import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {createStructuredSelector} from 'reselect';
import {auth} from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import {selectCurrentUser} from '../../redux/user/user.selectors.js';
import {selectHidden} from '../../redux/cart/cart.selectors.js'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {HeaderContainer, LogoContainer, Options, DivOption, LinkOption} from './header.styles'
const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo ></Logo>
        </LogoContainer>
        <Options>
            <LinkOption to='/shop'>Shop</LinkOption>
            <LinkOption to='/contact'>Contact</LinkOption>

            {currentUser ?(
            <LinkOption as='div' onClick={()=>auth.signOut()}>Sign Out</LinkOption>
            ): (<LinkOption to='/sign-in'>Sign In</LinkOption>
            )}
            <CartIcon />
        </Options>
        {hidden ? (null): <CartDropdown />}
        
    </HeaderContainer>
)

const mapStateToProps = state =>createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHidden
})

export default connect(mapStateToProps)(Header);
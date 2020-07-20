import React from 'react'
import {Link} from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils'
import './header.styles.scss'
import { connect } from 'react-redux';

const Header = ({currentUser}) => (
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

        </div>

    </div>
)
const mapStateToProps = state =>({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
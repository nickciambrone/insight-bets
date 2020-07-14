import React from 'react'
import {Link} from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'

import './header.styles.scss'

const NavContainer = () => (
    <div className = 'header'>
        <Link to='/' className='logo-container'>
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
            <Link className='option' to='/shop'>Shop</Link>
            <Link className='option' to='/contact'>Contact</Link>
        </div>

    </div>
)

export default NavContainer;
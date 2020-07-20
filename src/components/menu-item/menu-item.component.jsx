import React from 'react';
import { withRouter } from 'react-router-dom'
import './menu-item.styles.scss'
const MenuItem = ({title, img, size, match, history, linkUrl}) => (
    <div
    className='menu-item' onClick={()=> history.push(`${match.url}${linkUrl}`)} >
        <div className='background-image' style={{
            backgroundImage:`url(${img})`
        }}></div>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'> Buy Now</span>
        </div>
    </div>
)
export default withRouter(MenuItem);
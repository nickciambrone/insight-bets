import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import selectSections from '../../redux/directory/directory.selectors';
const Directory = ({sections})=>(
    <div className='directory-menu'>
    {
        sections.map(({id, title, imageUrl, linkUrl}) =>(
            <MenuItem key={id} title={title} img={imageUrl} linkUrl ={linkUrl}/>
        ))
    }
</div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectSections
})

export default connect(mapStateToProps)(Directory);
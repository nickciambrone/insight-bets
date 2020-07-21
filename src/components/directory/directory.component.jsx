import React from 'react';
import MenuItem from '../menu-item/menu-item.component'
import './directory.style.scss'
class Directory extends React.Component{
    constructor(){
        super();
        this.state={
            sections: [{id:1,title:'ho',imageUrl:'',linkUrl:''},{id:2,title:'ho',imageUrl:'d',linkUrl:''},{id:3,title:'ho',imageUrl:'d',linkUrl:''},{id:4,title:'ho',imageUrl:'d',linkUrl:''},{id:5,title:'ho',imageUrl:'d',linkUrl:''}]
        }
    }
    render(){
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, title, imageUrl, linkUrl}) =>(
                        <MenuItem key={id} title={title} img={imageUrl} linkUrl ={linkUrl}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;
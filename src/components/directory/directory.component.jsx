import React from 'react';
import MenuItem from '../menu-item/menu-item.component'
import './directory.style.scss'
class Directory extends React.Component{
    constructor(){
        super();
        this.state={
            sections: [{id:1,title:'ho',imageUrl:'https://www.newgenapps.com/wp-content/uploads/2020/04/1_c_fiB-YgbnMl6nntYGBMHQ-1080x675.jpeg',linkUrl:'hats'},{id:1,title:'ho',imageUrl:'d',linkUrl:''},{id:1,title:'ho',imageUrl:'d'},{id:1,title:'ho',imageUrl:'d',linkUrl:''},{id:1,title:'ho',imageUrl:'d',linkUrl:''}]
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
import React from 'react';

import './collection-preview.styles.scss'
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({items, title})=>(
<div className="collection-preview">
    <h1 className='title'>
        {title.toUpperCase()}
    </h1>
    <div className='preview'>
        {items.filter((item,indx)=>indx<4).map(item=>(
            <CollectionItem  item={item} key ={item.id}/>
        )
        )}
    </div>
</div>
);

export default CollectionPreview
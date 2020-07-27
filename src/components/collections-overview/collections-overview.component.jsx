import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors'
import './collections-overview.styles.scss'

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
        {collections.map(({ id, title, routeName, items }) => (
            <CollectionPreview title={title} items={items} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionsOverview);
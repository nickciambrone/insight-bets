import React from 'react';
import {Route} from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'
import {convertCollectionsSnapshotToMap, firestore} from '../../firebase/firebase.utils'
import {connect} from 'react-redux';
import {setCollections} from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionPageWithSpinner = WithSpinner(CollectionPage)
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
{/* <div className='collections-overview'>
{collections.map(({ id, title, routeName, items }) => (
    <CollectionPreview title={title} items={items} />
))}
</div> */}

class ShopPage extends React.Component{
    state={
        loading:true
    }
    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const {updateCollections } = this.props;
        const collectionRef = firestore.collection('collections')
        collectionRef.onSnapshot(async snapshot =>{
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap);
            this.setState({loading:false});
        })
    }
    
    render(){
        const {match} = this.props;
        const {loading} = this.state;
        return (
            <div className='shop-page'>

            <Route exact path={`${match.path}`} render={(props)=> <CollectionsOverviewWithSpinner isLoading = {loading} {...props}/>}/>
            <Route exact path={`${match.path}/:collectionId`} render={(props)=> <CollectionPageWithSpinner isLoading = {loading} {...props}/>}/>
          
        </div>
        )
    }
}


const mapDispatchToProps = dispatch =>({
    updateCollections: collectionsMap => dispatch(setCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);
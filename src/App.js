import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import { connect } from 'react-redux';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import CheckOutPage from './pages/checkout/checkout.component'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'
import {selectCurrentUser} from './redux/user/user.selectors.js'
import { createStructuredSelector } from 'reselect';
class App extends React.Component {

  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;

    //this.unsSubscribeFromAuth = firebase.auth().onAuthStateChanged() , this function
    // fires off whenever someone logs in or out and it takes in an async 
    //function with userAuth as a parameter, this parameter holds the value of the user information generated
    //by firebase (if the user is logged in) or null, if the user is logged out. 

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //if the user in fact logged in
      if (userAuth) {
        //create a userRef variable, which awaits a return value from createUserProfileDocument(userAuth)
        //createProfileDocument takes in the this userAuth object and returns the document in the users collection
        //at/user/:userAuth.uid, if one doesnt exist, we create one and return it anyway
        const userRef = await createUserProfileDocument(userAuth);
        //this firebase document has an onSnapshot method that listens for changes in the document's data,
        //it will return the data of the document its called on at the time its called
        userRef.onSnapshot(snapShot => {
          //with that data, we set the state with only the parameters that we want (the ones we created 
          //with userRef.set() in firebase.utils )
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
            //console log the state to see the changes
          }, () => console.log(this.state))
        })
      }
      //if the user isnt logged in, just set this.state.currentUser to null, (userAuth=null
      //if the user is not signed in when auth.onAuthStateChanged is called)
      setCurrentUser(userAuth);

    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckOutPage} />

          <Route
            exact
            path='/sign-in'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                  <SignInAndSignUp />
                )
            } />

        </Switch>
      </div>
    );
  }
}
const mapStateToProps = (state) => createStructuredSelector({
  currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyCwm4IUi-6yf6eFPhPnG24KFf5OsdW8m48",
    authDomain: "insight-bets.firebaseapp.com",
    databaseURL: "https://insight-bets.firebaseio.com",
    projectId: "insight-bets",
    storageBucket: "insight-bets.appspot.com",
    messagingSenderId: "171084054349",
    appId: "1:171084054349:web:5d1d3f712c64913f450104",
    measurementId: "G-DL562QRE7C"
  }
export const createUserProfileDocument = async (userAuth, additionalData)=>{
    if (!userAuth){
        return
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if (!snapShot.exists){
        const { email} = userAuth
        const createdAt = new Date()
        try{
           await userRef.set({
               email,
               createdAt,
               ...additionalData
           });
        }catch(err){console.log(err.message)}
    }
    console.log(snapShot)

    return userRef
}
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider()

  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

  export default firebase;
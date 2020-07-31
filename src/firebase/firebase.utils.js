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
export const addCollectionAndDocuments = async (collection, documents)=>{
    const collectionRef = firestore.collection(collection);
    const batch = firestore.batch();

    documents.forEach(document=>{
        const newDoc = collectionRef.doc();
        batch.set(newDoc, document)
    })
    return await batch.commit()

}

export const convertCollectionsSnapshotToMap = (snapshot) =>{
    const transformedCollection = snapshot.docs.map(doc =>{
        const {title, items} = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items,
        }
    })
    return transformedCollection.reduce((acc, coll) => {
        acc[coll.title.toLowerCase()]= coll;
        return acc
    },{});

    
}
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider()

  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

  export default firebase;
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyC7TJYCug_1E8VJalQyu0LzjANcpTNjuM4",
    authDomain: "crown-db-8d684.firebaseapp.com",
    projectId: "crown-db-8d684",
    storageBucket: "crown-db-8d684.appspot.com",
    messagingSenderId: "645925317617",
    appId: "1:645925317617:web:1d4823589764fce6f03250",
    measurementId: "G-MB35W95W36"
  }

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef
}
 
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

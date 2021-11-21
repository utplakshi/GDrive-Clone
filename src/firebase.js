import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCbgV4i-DeY4t5lz3heQ_M9q-EnYW09QqQ",
    authDomain: "gdrive-c8510.firebaseapp.com",
    projectId: "gdrive-c8510",
    storageBucket: "gdrive-c8510.appspot.com",
    messagingSenderId: "512841815136",
    appId: "1:512841815136:web:4aa9b29fd1d80adb4b1f05"
})

const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app

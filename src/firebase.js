import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBG-Yz4KdrmEw6ZG1xwKDpoMTCNbEzrRGw",
  authDomain: "cloud-drive-ab4b0.firebaseapp.com",
  projectId: "cloud-drive-ab4b0",
  storageBucket: "cloud-drive-ab4b0.appspot.com",
  messagingSenderId: "213459127117",
  appId: "1:213459127117:web:5e74af5def4f4aa8210504"
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

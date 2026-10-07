
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBkJLGNWadPeKwxXSKS28nFRxXj-8k01EA',
  authDomain: 'devdeakin-85df7.firebaseapp.com',
  projectId: 'devdeakin-85df7',
  storageBucket: 'devdeakin-85df7.firebasestorage.app',
  messagingSenderId: '102005709687',
  appId: '1:102005709687:web:392d3aaa01db2bd1335f72'
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAThsS_RU3GXcI481ZBakgVACjPSSU9gFE',
	authDomain: 'linkedin-clone-ty-a5109.firebaseapp.com',
	projectId: 'linkedin-clone-ty-a5109',
	storageBucket: 'linkedin-clone-ty-a5109.appspot.com',
	messagingSenderId: '1096920038331',
	appId: '1:1096920038331:web:5aca783eb67ea6fa58629e',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

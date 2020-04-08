import Constants from 'expo-constants';
import * as firebase from 'firebase';
import '@firebase/auth';

firebase.initializeApp(Constants.manifest.extra.firebase);

export default firebase;

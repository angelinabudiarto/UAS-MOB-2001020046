import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA-n2UDRY9BjlQAJ22dw6_JD_5NrertB0w",
    authDomain: "uas-mob-e0ce9.firebaseapp.com",
    projectId: "uas-mob-e0ce9",
    storageBucket: "uas-mob-e0ce9.appspot.com",
    messagingSenderId: "543427349646",
    appId: "1:543427349646:web:b52109144ef2a68f8d0ddf",
    measurementId: "G-GJR9NR6GT5"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export {firebase};
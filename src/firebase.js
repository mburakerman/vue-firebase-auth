import * as firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyAsIll-3DhRKXLoh64h72DlWIGVzinRAzY",
    authDomain: "vuedemo-5c83b.firebaseapp.com",
    databaseURL: "https://vuedemo-5c83b.firebaseio.com",
    projectId: "vuedemo-5c83b",
    storageBucket: "vuedemo-5c83b.appspot.com",
    messagingSenderId: "929533780859",
    appId: "1:929533780859:web:7482154e09becf101193de",
    measurementId: "G-QGMR4T9HKR"
};

firebase.initializeApp(firebaseConfig);

/*
export default {
    auth: firebase.auth(),
    login2() {
        firebase
            .auth()
            .createUserWithEmailAndPassword("lorem@mail.com", "123456")
            .then(data => {
                alert(data);
            });
    },
    login() {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then(function (result) {
                console.log(result);
            })
            .catch(function (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
                console.log(errorCode, errorMessage, email, credential);
            });
    },
    logout() {
        firebase
            .auth()
            .signOut()
            .then(function () { })
            .catch(function (error) {
                console.log(error);
            });
    }
};
*/
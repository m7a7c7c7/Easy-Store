// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Configure Firebase.
const config = {
    apiKey: "AIzaSyAzEnz6I6kHjWp4qvsrlkPsLQDC1wDMu-8",
    authDomain: "easy-store-972f2.firebaseapp.com",
    projectId: "easy-store-972f2",
    storageBucket: "easy-store-972f2.appspot.com",
    messagingSenderId: "1093385438451",
    appId: "1:1093385438451:web:c311617259d7878de9a386"
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/home',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      const user = {
        uid: authResult.user.uid,
        name: authResult.user.displayName,
        photoUrl: authResult.user.photoURL,
        email: authResult.user.email,
        flagNewUser: authResult.additionalUserInfo.isNewUser,
      };

      localStorage.setItem("user", JSON.stringify(user));
      return true;
    },
  },
};

function ButtonLogin() {
  return (
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
  );
}

export default ButtonLogin

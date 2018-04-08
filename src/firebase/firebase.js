import * as firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyDVriLD7Vdoae6m0DwphH32Sb4Gsus9XEg',
    authDomain: 'rupav-expensify.firebaseapp.com',
    databaseURL: 'https://rupav-expensify.firebaseio.com',
    projectId: 'rupav-expensify',
    storageBucket: 'rupav-expensify.appspot.com',
    messagingSenderId: '1020304218028'
};

firebase.initializeApp(config);

firebase.database().ref().set({
    name: 'Rupav Jain'
});

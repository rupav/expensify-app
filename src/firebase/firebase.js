import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

console.log('hello', config);
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// const expenses = [{
//     description: 'Rent',
//     amount: 109500,
//     note: '',
//     createdAt: 21311
// }, {
//     description: 'Cofee',
//     amount: 100,
//     note: '',
//     createdAt: 2131123
// }, {
//     description: 'x',
//     amount: 10,
//     note: '',
//     createdAt: -21311
// }];

// // child_changed, child_removed, child_added
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // expenses.forEach((expense) => {
// //     database.ref('expenses').push({
// //         ...expense
// //     });
// // });

// // database.ref('expenses')
// //     .once('value')
// //     .then((snapshot) => {
// //         const expenses = [];
// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });
// //         console.log(expenses);
// //     });

// // database.ref('expenses')
// //     .on('value', (snapshot) => {
// //         const expenses = [];
// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });
// //         console.log(expenses);
// //     });



// // database.ref('notes').push({
// //     title: 'To Do',
// //     body: 'Go for a run!'
// // });

// // const notes = [{
// //     id: '12',
// //     title: 'FirstN Note!',
// //     body: 'This is my note'
// // }, {
// //     id: '33',
// //     title: 'Second Note!',
// //     body: 'This is my note'

// // }];

// // database.ref('notes').set(notes);

// // database.ref().set({
// //     name: 'Rupav Jain',
// //     age: 21,
// //     isSingle: true,
// //     location: {
// //         city: 'New Delhi',
// //         country: 'India'
// //     }
// // }).then(() => {
// //     console.log('Data is saved!');
// // }).catch(() => {
// //     console.log('Data is not saved!!!');
// // });

// // database.ref('isSingle').remove().then(() => {
// //     console.log('Successfully removed!');
// // }).catch((e) => {
// //     console.log('error creeped in', e);
// // });

// // // update is not done here!

// // database.ref()
// //     .once('value')
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     }).catch((e) => {
// //         console.log('Error fetching data', e);
// //     });


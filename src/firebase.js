import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCkdEzPlHJHTpKNwbxh5zrSQqSccezjeRg",
    authDomain: "students-72d90.firebaseapp.com",
    databaseURL: "https://students-72d90.firebaseio.com",
    projectId: "students-72d90",
    storageBucket: "students-72d90.appspot.com",
    messagingSenderId: "130685929528",
    appId: "1:130685929528:web:ec05bce7adcd6d74"
};

const app = firebase.initializeApp(firebaseConfig);
const students = app.firestore().collection('students');

export default app;
export { students };

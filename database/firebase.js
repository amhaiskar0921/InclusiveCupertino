// database/firebaseDb.js

import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyARJ3pIJWAr3Ykm_uq-th4Bk8G_mbNRjAI",
    authDomain: "cupertinohacks-de95d.firebaseapp.com",
    databaseURL: "https://cupertinohacks-de95d.firebaseio.com",
    projectId: "cupertinohacks-de95d",
    storageBucket: "cupertinohacks-de95d.appspot.com",
    messagingSenderId: "583311855079",
    appId: "1:583311855079:web:c90274715bd743f7d00142"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
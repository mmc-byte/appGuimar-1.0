const firebase = require('../backend/node_modules/firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); 
firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: 'https://app-guimar-2.firebaseio.com',
});

module.exports = firebase;
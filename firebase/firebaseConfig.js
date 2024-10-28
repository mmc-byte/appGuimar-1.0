const firebase = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); 
firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: 'https://app-guimar-2.firebaseio.com', // Reemplaza <your-project-id> con el ID de tu proyecto
});

module.exports = firebase;


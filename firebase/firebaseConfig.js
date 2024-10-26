const firebase = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // Cambia este nombre según el archivo descargado

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: 'https://<your-project-id>.firebaseio.com', // Reemplaza <your-project-id> con el ID de tu proyecto
});

module.exports = firebase;

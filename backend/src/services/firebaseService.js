const firebase = require('../utils/firebaseAdmin');

// obtener usuarios desde la colección "prueba"
const obtenerUsuariosDesdeFirebase = async () => {

    try {
        const snapshot = await firebase.firestore().collection('prueba').get();
        const usuarios = snapshot.docs.map(doc => doc.data()); // Mapear los documentos a un arreglo

        return usuarios;

    } catch (error) {

        throw new Error('Error al obtener usuarios desde Firebase: ' + error.message);
    }
};

module.exports = { obtenerUsuariosDesdeFirebase };

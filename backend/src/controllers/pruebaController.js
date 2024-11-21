const { obtenerUsuariosDesdeFirebase } = require('../services/firebaseService');

exports.obtenerUsuarios = async (req, res) => {

    try {
        const usuarios = await obtenerUsuariosDesdeFirebase();
        // console.log(usuarios);

        res.status(200).json({ users: usuarios });

    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los usuarios desde Firebase' });
    }
};

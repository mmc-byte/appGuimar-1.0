const User = require('../models/User');

exports.adminLogin = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.validatePassword(username, password);
        if (user && user.role === 'admin') {
            res.json({ message: 'Login exitoso', user });
        } else {
            res.status(401).json({ message: 'Credenciales incorrectas o usuario no autorizado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al intentar iniciar sesión', error });
    }
};

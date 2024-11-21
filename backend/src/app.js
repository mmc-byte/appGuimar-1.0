const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const adminport = process.env.ADMINPORT || 4200;



//importando
const morgan = require('morgan');


//middlewares config
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: `http://localhost:${adminport}`
}));

//routes (api endpoints)
const pruebaRoutes = require('./routes/pruebaRoutes');
app.use('/prueba', pruebaRoutes); // prefijo '/prueba' a rutas de Prueba

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);



//endpoints administrativos
// app.get('/api/admin/users', (req, res) => {
//     // Lógica para obtener usuarios desde la base de datos
//     res.json({
//         users: [
//             { name: 'marta', email: 'marta@zackmail.com' },
//             { name: 'batman', email: 'danight@zackmail.com' },
//             { name: 'superman', email: 'clark@zackmail.com' },

//         ]
//     });
// });









//-fin

module.exports = app;
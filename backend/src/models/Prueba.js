class Prueba {
    constructor() {
        // Simulamos una base de datos
        this.usuarios = [
            { id: 1, name: "Usuario 1", email: "usuario1@ejemplo.com" },
            { id: 2, name: "Usuario 2", email: "usuario2@ejemplo.com" }
        ];
    }

    obtenerUsuarios() {
        // Simulamos una operación que retorna los usuarios
        return new Promise((resolve) => {
            resolve(this.usuarios);
        });
    }
}

module.exports = new Prueba();

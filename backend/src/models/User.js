const firebaseAdmin = require('../utils/firebaseAdmin');
const db = firebaseAdmin.firestore();

class User {
    static async findByUsername(username) {
        const usersRef = db.collection('users');
        const snapshot = await usersRef.where('username', '==', username).get();
        if (snapshot.empty) {
            return null;
        }

        const userDoc = snapshot.docs[0];
        return { id: userDoc.id, ...userDoc.data() };
    }

    static async validatePassword(username, password) {
        const user = await this.findByUsername(username);
        if (user && user.pass === password) { // Aquí cambiar a encriptación
            return user;
        }
        return null;
    }
}

module.exports = User;

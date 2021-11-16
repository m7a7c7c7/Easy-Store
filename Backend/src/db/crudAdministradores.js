const db = require('./firebase.js');


function getAdmin(uid, callback) {
    return db.collection('Administradores').doc(uid).get()
        .then((doc) => {
            callback(doc.data())
        })
        .catch((err) => {
            callback(`Error to get user ${err}`);
        })
}


function addAdmin(admin, callback) {
    return db.collection('Administradores').add(admin)
        .then(() => {
            callback("admin created")
        })
        .catch((err) => {
            callback(`Error to add admin ${err}`);
        })
}

function updateAdminTotally(uid, admin, callback) {
    return db.collection('Administradores').doc(uid).set(admin)
        .then(() => {
            callback("Success");
        })
        .catch((err) => {
            callback(`Error to update admin ${err}`);
        })
}


function deleteAdmin(uid, callback) {
    return db.collection('Administradores').doc(uid).delete()
        .then(() => {
            callback("Success");
        })
        .catch((err) => {
            callback(`Error to delete admin ${err}`);
        })
}

module.exports = {
    getAdmin,
    addAdmin,
    updateAdminTotally,
    deleteAdmin
}
const db = require('./firebase.js');

function getProveedores(callback) {
    return db.collection('Proveedores').get()
        .then((refDoc) => {
            var arrayProveedores = [];
            refDoc.forEach((doc) => {
                arrayProveedores.push({...doc.data(),ID:doc.id});
                //console.log(doc.id, '=>', doc.data());
            });
            
                
            callback(arrayProveedores);
        })
        .catch(err => {
            //console.error(`Error to get experts ${err}`);
            callback(`Error to get Proveedor ${err}`);
        })
}

function getProveedor(wid, callback) {
    return db.collection('Proveedores').doc(wid).get()
        .then((doc) => {
            callback(doc.data())
        })
        .catch((err) => {
            callback(`Error to get Proveedor ${err}`);
        })
}

function addProveedor(Proveedor, callback) {
    return db.collection('Proveedores').add(Proveedor)
        .then(() => {
            callback("Proveedor created")
        })
        .catch((err) => {
            callback(`Error to add Proveedor ${err}`);
        })
}

function updateProveedorTotally(wid, Proveedor, callback) {
    return db.collection('Proveedores').doc(wid).set(Proveedor)
        .then(() => {
            callback("Success");
        })
        .catch((err) => {
            callback(`Error to update Proveedor ${err}`);
        })
}

function updateProveedorPartial(wid, Proveedor, callback) {
    return db.collection('Proveedores').doc(wid).update(Proveedor)
        .then(() => {
            callback("Success");
        })
        .catch((err) => {
            callback(`Error to update Proveedor ${err}`);
        })
}

function deleteProveedor(wid, callback) {
    return db.collection('Proveedores').doc(wid).delete()
        .then(() => {
            callback("Success");
        })
        .catch((err) => {
            callback(`Error to delete Proveedor ${err}`);
        })
}



module.exports = {
    getProveedor,
    getProveedores,
    addProveedor,
    updateProveedorPartial,
    updateProveedorTotally,
    deleteProveedor
}
const db = require('./firebase.js');

function getProductos(callback) {
    return db.collection('Productos').get()
        .then((refDoc) => {
            var arrayProductos = [];
            refDoc.forEach((doc) => {
                arrayProductos.push({...doc.data(),ID:doc.id});
                //arrayProductos.push(doc.id)
                //console.log(doc.id, '=>', doc.data());
            })
            callback(arrayProductos);
        })
        .catch(err => {
            //console.error(`Error to get experts ${err}`);
            callback(`Error to get productos ${err}`);
        })
}

function getProducto(eid, callback) {
    return db.collection('Productos').doc(eid).get()
        .then((doc) => {
            callback(doc.data())
        })
        .catch((err) => {
            callback(`Error to get producto ${err}`);
        })
}

function addProducto(Producto, callback) {
    return db.collection('Productos').add(Producto)
        .then(() => {
            callback("Producto created")
        })
        .catch((err) => {
            callback(`Error to add Producto ${err}`);
        })
}

function updateProductoTotally(eid, Producto, callback) {
    return db.collection('Productos').doc(eid).set(Producto)
        .then(() => {
            callback("Success");
        })
        .catch((err) => {
            callback(`Error to update Producto ${err}`);
        })
}

function updateProductoPartial(eid, Producto, callback) {
    return db.collection('Productos').doc(eid).update(Producto)
        .then(() => {
            callback("Success");
        })
        .catch((err) => {
            callback(`Error to update Producto ${err}`);
        })
}

function deleteProducto(eid, callback) {
    return db.collection('Productos').doc(eid).delete()
        .then(() => {
            callback("Success");
        })
        .catch((err) => {
            callback(`Error to delete Producto ${err}`);
        })
}



module.exports = {
    getProductos,
    getProducto,
    addProducto,
    updateProductoPartial,
    updateProductoTotally,
    deleteProducto
}
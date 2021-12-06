const db = require('./firebase.js');

function getFacturas(callback) {
    return db.collection('Facturas').get()
        .then((refDoc) => {
            var arrayFacturas = [];
            refDoc.forEach((doc) => {
                arrayFacturas.push({...doc.data(),ID:doc.id});
                //console.log(doc.id, '=>', doc.data());
            })
            callback(arrayFacturas);
        })
        .catch(err => {
            //console.error(`Error to get experts ${err}`);
            callback(`Error to get Factura ${err}`);
        })
}

function getFactura(aid, callback) {
    return db.collection('Facturas').doc(aid).get()
        .then((doc) => {
            callback(doc.data())
        })
        .catch((err) => {
            callback(`Error to get Factura ${err}`);
        })
}

function addFactura(Factura, callback) {
    return db.collection('Facturas').add(Factura)
        .then(() => {
            callback("Factura created")
        })
        .catch((err) => {
            callback(`Error to add Factura ${err}`);
        })
}

function updateFacturaTotally(aid, Factura, callback) {
    return db.collection('Facturas').doc(aid).set(Factura)
        .then(() => {
            callback("Success");
        })
        .catch((err) => {
            callback(`Error to update Factura ${err}`);
        })
}

function updateFacturaPartial(aid, Factura, callback) {
    return db.collection('Facturas').doc(aid).update(Factura)
        .then(() => {
            callback("Success");
        })
        .catch((err) => {
            callback(`Error to update Factura ${err}`);
        })
}

function deleteFactura(aid, callback) {
    return db.collection('Facturas').doc(aid).delete()
        .then(() => {
            callback("Success");
        })
        .catch((err) => {
            callback(`Error to delete Factura ${err}`);
        })
}



module.exports = {
    getFacturas,
    getFactura,
    addFactura,
    updateFacturaPartial,
    updateFacturaTotally,
    deleteFactura
}
const express = require('express');
const dbW = require('../src/db/crudProveedores.js');
const router = express.Router();


router.get('/', function (req, res) {
    dbW.getProveedores(function (arrayProveedores) {
        res.send(arrayProveedores);
    })
});

router.get('/:id', function (req, res) {
    const wid = req.params.id;
    dbW.getProveedor(wid, function (Proveedor) {
        res.json(Proveedor);
    })
})

router.post('/', (req, res)=>{
    const Proveedor = req.body;
    dbW.addProveedor(Proveedor, function (response) {
        res.send(response);
    })
})


router.put('/:id', (req, res) => {
    const wid = req.params.id;
    const Proveedor = req.body;
    dbW.updateProveedorTotally(wid, Proveedor, function (response) {
        res.send(response);
    })
})

router.patch('/:id', (req, res) => {
    const wid = req.params.id;
    const expert = req.body;
    dbW.updateProveedorPartial(wid, expert, function (response) {
        res.send(response);
    })
})

router.delete('/:id', (req, res) => {
    const wid = req.params.id;
    dbW.deleteProveedor(wid, function (response) {
        res.send(response);
    })
})

module.exports = router;
const express = require('express');
const dbE = require('../src/db/crudProductos.js');
const router = express.Router();


router.get('/', function (req, res) {
    dbE.getProductos(function (arrayProductos) {
        res.send(arrayProductos);
    })
});

router.get('/:id', function (req, res) {
    const eid = req.params.id;
    dbE.getProducto(eid, function (Producto) {
        res.json(Producto);
    })
})

router.post('/', (req, res)=>{
    const Producto = req.body;
    dbE.addProducto(Producto, function (response) {
        res.send(response);
    })
})


router.put('/:id', (req, res) => {
    const eid = req.params.id;
    const Producto = req.body;
    dbE.updateProductoTotally(eid, Producto, function (response) {
        res.send(response);
    })
})

router.patch('/:id', (req, res) => {
    const eid = req.params.id;
    const expert = req.body;
    dbE.updateProductoPartial(eid, expert, function (response) {
        res.send(response);
    })
})

router.delete('/:id', (req, res) => {
    const eid = req.params.id;
    dbE.deleteProducto(eid, function (response) {
        res.send(response);
    })
})

module.exports = router;
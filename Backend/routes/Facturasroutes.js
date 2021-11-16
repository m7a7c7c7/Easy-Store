const express = require('express');
const dbA = require('../src/db/crudFacturas.js');
const router = express.Router();


router.get('/', function (req, res) {
    dbA.getFacturas(function (arrayFacturas) {
        res.send(arrayFacturas);
    })
});

router.get('/:id', function (req, res) {
    const aid = req.params.id;
    dbA.getFactura(aid, function (Factura) {
        res.json(Factura);
    })
})

router.post('/', (req, res)=>{
    const Factura = req.body;
    dbA.addFactura(Factura, function (response) {
        res.send(response);
    })
})


router.put('/:id', (req, res) => {
    const aid = req.params.id;
    const Factura = req.body;
    dbA.updateFacturaTotally(aid, Factura, function (response) {
        res.send(response);
    })
})

router.patch('/:id', (req, res) => {
    const aid = req.params.id;
    const expert = req.body;
    dbA.updateFacturaPartial(aid, expert, function (response) {
        res.send(response);
    })
})

router.delete('/:id', (req, res) => {
    const aid = req.params.id;
    dbA.deleteFactura(aid, function (response) {
        res.send(response);
    })
})

module.exports = router;
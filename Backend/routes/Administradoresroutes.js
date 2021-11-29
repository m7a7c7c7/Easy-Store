const express = require('express');
const dbU = require('../src/db/crudAdministradores.js')
const router = express.Router();

router.get('/:id', function (req, res) {
    const uid = req.params.id;
    dbU.getAdmin(uid, function (admin) {
        res.json(admin);
    })
})

router.post('/', (req, res)=>{
    const admin = req.body;
    dbU.addAdmin(admin, function (response) {
        res.send(response);
    })
})

router.put('/:id', (req, res) => {
    const uid = req.params.id;
    const admin = req.body;
    dbU.updateAdminTotally(uid, admin, function (response) {
        res.send(response);
    })
})

router.delete('/:id', (req, res) => {
    const uid = req.params.id;
    dbU.deleteAdmin(uid, function (response) {
        res.send(response);
    })
})

module.exports = router;
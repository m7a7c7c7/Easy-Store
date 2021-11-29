const routerProductos = require('./Productosroutes.js');
const routerAdministradores= require('./Administradoresroutes.js');
const routerFacturas=require('./Facturasroutes.js');
const routerProveedores=require('./Proveedoresroutes.js')


function APIRoutes(app){
    app.use('/Productos', routerProductos);
    app.use('/Administradores', routerAdministradores);
    app.use('/Facturas',routerFacturas);
    app.use('/Proveedores',routerProveedores);
    
}

module.exports = APIRoutes;
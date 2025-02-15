const router = require('express').Router();
const productosRoutes = require('../productos/routes/productos.routes');

router.use('/productos', productosRoutes);

module.exports = router;
const router = require('express').Router();
const productosController = require('../controllers/productos');
router.get('/', productosController.listProductos);

router.get('/:id', productosController.getProductoById);

router.get('/search/:sku', productosController.getProductoBySku);

router.post('/', productosController.createProducto);

router.put('/:id', productosController.updateProducto);

router.delete('/:id', productosController.deleteProducto);

module.exports = router;


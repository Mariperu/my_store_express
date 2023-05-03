const express = require('express');
const ProductsService = require('./../services/productsService');
const validatorHandler = require('./../middlewares/validatorHandler');
const {
  getProductSchema,
  createProductSchema,
  updateProductSchema,
} = require('./../schemas/productSchema');

//config ruta solo para productos
const router = express.Router();
const service = new ProductsService();

//GET

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

//RUTA ESPECÍFICA (va antes que una dinámica, si en caso tienen rutas similares)
router.get('/filter', (req, res) => {
  res.send('filter');
});

//RUTA DINÁMICA
//Obteniendo un producto con un parámetro, id
// router.get('/:id', (req, res) => {
//   //1ra forma de usar parámetros
//   //const id = req.params.id;
//   //2da forma de usar parámetros, destructurando
//   const { id } = req.params;
//   //res.json({ id, name: 'Producto2', price: 2000 });
//   //colocando status code:
//   if (id === '999') {
//     //999 va en string porque va como query param
//     res.status(404).json({ message: 'not found' });
//   } else {
//     res.status(200).json({ id, name: 'Producto2', price: 2000 });
//   }
// });

//aplicando servicios
router.get(
  '/:id',
  //middleware to validate data
  validatorHandler(getProductSchema, 'params'),
  //middleware for errors
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

// POST
//(ruta, (callback))
router.post(
  '/',
  //middleware to validate data
  validatorHandler(createProductSchema, 'body'),
  //middleware for errors
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  }
);

// PATCH
router.patch(
  '/:id',
  validatorHandler(getProductSchema, 'params'), //valida id
  validatorHandler(updateProductSchema, 'body'), //valida body
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      // res.status(404).json({
      //   message: error.message,
      // });
      next(error);
    }
  }
);

// DELETE
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const r = await service.delete(id);
  res.json(r);
});

module.exports = router;

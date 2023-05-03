const express = require('express');
const { faker } = require('@faker-js/faker');

//config ruta solo para categories
const router = express.Router();

//Obteniendo un producto con dos parámetros
router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({ categoryId, productId, price: 2000 });
});

module.exports = router;

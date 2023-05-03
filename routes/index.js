const express = require('express');

const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter.js');
const categoriesRouter = require('./categoriesRouter.js');

function routerApi(app) {
  //Ruta versionada: v1
  const router = express.Router();
  app.use('/api/v1', router);

  //asignando rutas a cada file
  //app.use(endpoint, rutas que contiene el endpoint)
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
}

module.exports = routerApi;

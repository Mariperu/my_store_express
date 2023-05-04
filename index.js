const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/errorHandler');

const app = express();
const port = process.env.PORT || 3000; //3000

//Middleware (para mostrar data en json en respuestas)
app.use(express.json());

//Middleware CORS setting
//solo esta línea habilita toda la api a todo el público, sin restricción
// app.use(cors());
//Configurando puertos(o dominios) de front permitidos para hacer consultas a la api
const whitelist = ['http://localhost:5500', 'https://myapp.com'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  },
};

app.use(cors(options));

//Definiendo  rutas
app.get('/', (req, res) => {
  res.send('Server en Express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, en nueva ruta');
});

//pasando un json en una ruta
// app.get('/products', (req, res) => {
//   res.json([
//     { name: 'Producto1', price: 1000 },
//     { name: 'Producto2', price: 2000 },
//   ]);
// });

//llamando a todas las rutas modularizadas
routerApi(app);

//llamando a middlewares
//se ejecutan en forma secuencial, si importa el orden
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

//Puerto a escuchar
app.listen(port, () => {
  console.log('My port: ' + port);
});

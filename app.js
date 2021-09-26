//Express
const express = require('express');
const app = express();

//Bodyparser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Moongose
const mongoose = require("mongoose");
<<<<<<< HEAD
var isProduction = process.env.NODE_ENV === 'production';

mongoose.connect(
  process.env.MONGODB_URI, // obtiene la url de conexión desde las variables de entorno
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true}
);
=======
mongoose.connect(process.env.MONGODB_URI,{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
>>>>>>> ba03c520a86f844b8cf3ef36168ad58c447b2319
mongoose.set("debug", true);

//Modelos
require('./models/Cliente');
require('./models/Pedido');
require('./models/Plato');
require('./models/Receta');

//Configurando las rutas
app.use('/v1', require('./routes'));

//Iniciamos el servidor
<<<<<<< HEAD
var server = app.listen(process.env.PORT, function () {
  console.log('Escuchando en el puerto ' + server.address().port);
=======
app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`)
>>>>>>> ba03c520a86f844b8cf3ef36168ad58c447b2319
});


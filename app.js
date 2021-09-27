//Express
const express = require('express');
const app = express();

//Bodyparser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Moongose
const mongoose = require("mongoose");
//var isProduction = process.env.NODE_ENV === 'production';

mongoose.connect(
  process.env.MONGODB_URI, // obtiene la url de conexión desde las variables de entorno
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true}
);
mongoose.set("debug", true);

//Modelos
require('./models/Cliente');
require('./models/Pedido');
require('./models/Plato');
require('./models/Receta');

//Configurando las rutas
app.use('/v1', require('./routes'));

//Iniciamos el servidor
var server = app.listen(process.env.PORT, function () {
  console.log('Escuchando en el puerto ' + server.address().port);
});


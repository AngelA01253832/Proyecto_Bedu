//Express
const express = require('express');
const app = express();

//Bodyparser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Moongose
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI,{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
mongoose.set("debug", true);

//Modelos
require('./models/Cliente');
require('./models/Pedido');
require('./models/Plato');
require('./models/Receta');

//Configurando las rutas
app.use('/v1', require('./routes'));

//Iniciamos el servidor
app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`)
});


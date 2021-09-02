//Express
const express = require('express');
const app = express();

//Body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/entrega1', require('./routes'));

//Inicializacion de servidor 
const PORT = 4001;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});


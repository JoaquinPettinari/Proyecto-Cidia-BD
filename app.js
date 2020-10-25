const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();
const bodyParser= require('body-parser');
const cors = require('cors');


app.use(cors());
app.use(bodyParser.json());



//ROUTES
const pelicula = require('./routes/pelicula');
const { use } = require('./routes/pelicula');
app.use('/', pelicula)


//CONNECT to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true},
    () => console.log('Connected to DB! ')
)


app.listen(3001);
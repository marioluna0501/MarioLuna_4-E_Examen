// importacion de las dependencias
const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
// se crea la constante para el valor del puerto
const port = process.env.PORT|| 3000;


//emplear las rutas
let pintoresRouter =require('./routes/pintor');

//sitio web y hbs
const  app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+'/views/partials');
app.use(express.static(__dirname+'/public'));

//vamos a decirle a express que ruta emplear
app.use('/', pintoresRouter);
app.get('/pintor1', (req, res)=>{
    res.render('pintor1');
});
app.get('/pintor2', (req, res)=>{
    res.render('pintor2');

});
app.get('/pintor3', (req, res)=>{
    res.render('pintor3');

});
app.get('/pintor4', (req, res)=>{
    res.render('pintor4');

});
//conexion con mongo db
mongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://marioex:huaweiy9@lunamario-vigij.mongodb.net/curso?retryWrites=true&w=majority';
mongoose.connect(cadena, {useNewUrlParser: true, useUnifiedTopology:true})
    .then(()=>{
        console.log('Conexión con Mongo exitosa');
    })
    .catch(err=> console.log(err));

    app.listen(port,()=>{
        console.log('Escuchando el puerto 3000');
    });

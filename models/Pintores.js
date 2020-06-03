const mongoose = require('mongoose');
//se crea un esquema (Base de datos)
let Schema = mongoose.Schema;
//se crea la coleccion
let PintoresSchema =new Schema({
    nombre: {
        type: String,
        required: [true, 'Requerimos el nombre']
    },
    corriente:{
        type: String,
        required:[true, 'Requerimos la corriente']
    },
    nacionalidad:{
        type: String
    },
    pintura:{
        type: String
    }

});
module.exports = mongoose.model('Pintores',PintoresSchema );
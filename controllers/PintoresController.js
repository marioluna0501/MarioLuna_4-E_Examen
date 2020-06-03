let mongoose = require('mongoose');
let Pintores = require('../models/Pintores');

let pintoresController= {};
/*find*/
pintoresController.list = (req, res)=>{
    Pintores.find({})
        .limit(100)
        .skip(0)
        .exec((err, pintor)=>{
            if (err){
                console.log('Error:',err);
            }


            //console.log('Datos obtenidos');
            res.render('../views/index', {
                Pintores: pintor,
                title: "Listado de pintores",
                year: new Date().getFullYear()
            });
        })
};

module.exports = pintoresController;



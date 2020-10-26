const mongoose = require('mongoose')

const PeliculaSchema = mongoose.Schema({
    id:{
        type:Number,
        require:true,
        unique:true
    },
    poster_path:{
        type:String,
        require:true
    }
})


module.exports = mongoose.model('Pelicula', PeliculaSchema);
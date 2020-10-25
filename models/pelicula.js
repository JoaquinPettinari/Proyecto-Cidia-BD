const mongoose = require('mongoose')

const PeliculaSchema = mongoose.Schema({
    id:{
        type:Number,
        require:true,
        unique:true
    },
    title:{
        type:String,
        require: true
    },
    poster_path:{
        type:String,
        require:true
    },
    overview:{
        type:String,
        require:true
    },
    homepage:{
        type:String
    },
    budget:{
        type:Number
    },
    release_date:{
        type:String
    },
    vote_average:{

    }

})


module.exports = mongoose.model('Pelicula', PeliculaSchema);
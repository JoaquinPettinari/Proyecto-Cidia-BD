const { Router } = require("express");
const { db } = require("../models/pelicula");
const pelicula = require("../models/pelicula");
const Pelicula = require('../models/pelicula');
const router = Router();

router.get('/movies', async (req,res) => {
    try{
        const todasLasPeliculas = await Pelicula.find({tipo: "movie" });        
        res.json(todasLasPeliculas);
    }catch{
        res.json({message:err})
    }
})

router.get('/tvs', async (req,res) => {
    try{
        const todasLasPeliculas = await Pelicula.find({tipo: "tv" });        
        res.json(todasLasPeliculas);
    }catch{
        res.json({message:err})
    }
})

router.get('/people', async (req,res) => {
    try{
        const todasLasPeliculas = await Pelicula.find({tipo: "person" });        
        res.json(todasLasPeliculas);
    }catch{
        res.json({message:err})
    }
})

router.get('/', async (req, res) => {
    try{
        const pelicula = await Pelicula.find();
        res.json(pelicula)
    }catch(err){
        res.json({message:err})
    }
})

router.post('/', async (req, res) => {
    const pelicula = new Pelicula({
        id:req.body.id,    
        poster_path:req.body.poster_path,
        tipo:req.body.tipo ,     
        profile_path:req.body.poster_path
    })
    
    try{
        const savePelicula = await pelicula.save();
        res.json(savePelicula);
    }catch(err){
        res.json({message: err});
    }
    
})

router.delete('/',async (req,res) => {
    try{
        const eliminarPelicula = await Pelicula.remove({tipo:"person"})
        res.json(eliminarPelicula)
    }
    catch(err){
        res.json({message: err});
    }
})

module.exports = router;
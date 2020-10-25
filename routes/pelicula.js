const { Router } = require("express");
const Pelicula = require('../models/pelicula');
const router = Router();

router.get('/', async (req,res) => {
    try{
        const pelicula = await Pelicula.find();
        res.json(pelicula);
    }catch{
        res.json({message:err})
    }
})

router.get('/:id', async (req, res) => {
    try{
        const pelicula = await Pelicula.find({ id: req.params.id});
        res.json(pelicula)
    }catch(err){
        res.json({message:err})
    }
})

router.post('/', async (req, res) => {
    const pelicula = new Pelicula({
        id:req.body.id,
        title:req.body.title,
        vote_average:req.body.vote_average,
        budget:req.body.budget,
        homepage:req.body.homepage,
        poster_path:req.body.poster_path,
        overviwe:req.body.overviwe,
        release_date:req.body.release_date
    })
    
    try{
        const savePelicula = await pelicula.save();
        res.json(savePelicula);
    }catch(err){
        res.json({message: err});
    }
    
})

router.delete('/:id',async (req,res) => {
    try{
        const eliminarPelicula = await Pelicula.remove({id:req.params.id})
        res.json(eliminarPelicula)
    }
    catch(err){
        res.json({message: err});
    }
})

module.exports = router;
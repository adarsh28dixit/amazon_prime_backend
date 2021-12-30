import express from 'express'
import Movies from '../models/movieModel.js';

const movieRouter = express.Router();

movieRouter.post('/movie', (req, res)=> {
    const dbMovie = req.body;
    Movies.create(dbMovie, (err, data) =>{
        if(err){
            res.send(err)
        } else {
            res.send(data)
        }
    })
})


movieRouter.get('/movie', (req, res)=> {
    Movies.find( (err, data) =>{
        if(err){
            res.send(err)
        } else {
            res.send(data)
        }
    })
})

movieRouter.get('/movie/:id', async(req, res)=> {
    const movieDetail = await Movies.findById(req.params.id);
    if(movieDetail){
        res.send(movieDetail)
    } else {
        res.send({message: 'not found'})
    }
})

export default movieRouter;
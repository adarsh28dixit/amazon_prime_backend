import express from 'express';
import mongoose from 'mongoose';
import movieRouter from './routers/movieRouter.js';

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))

mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use('/api', movieRouter)

app.get('/', (req, res) =>{
    res.send('server is ready!')
})

app.listen(5000, ()=>{
    console.log('http://localhost:5000')
})
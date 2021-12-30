import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema({
    name: {type: String},
    description: {type: String},
    subtitles: {type: String},
    languages: {type: String},
    season: {type: Number},
    image: {type: String},
    category: {type: String}
})

const Movies = mongoose.model("Movies", movieSchema);

export default Movies;
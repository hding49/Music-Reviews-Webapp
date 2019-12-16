//const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



var SongSchema = new Schema({
    Title: {type: String,  index: true, unique: true, max: 100},
    Artist: {type: String,  max: 100},
    Album: {type: String,  max: 100},
    Year: {type: String,  max: 100},
    Comments: {type: String,  max: 100},
    Reserved: {type: String,  max: 100},
    Track: {type: String,   max: 100},
    Genre: {type: String,  max: 100},

    AvRate: {type: String, default: "0"},
    //Top: {type: String},
    NumRate: {type: Number},
    //MostRecent: {type: String,  max: 100},
    
});
//ProductSchema.plugin(uniqueValidator);


// Export the model
module.exports = mongoose.model('Song', SongSchema);
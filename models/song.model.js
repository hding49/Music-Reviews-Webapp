//const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



var SongSchema = new Schema({
    Title: {type: String, required: 'Email can\'t be empty', index: true, unique: true, max: 100},
    Artist: {type: String, required: 'Email can\'t be empty', max: 100},
    Album: {type: String, required: 'Email can\'t be empty', max: 100},
    Year: {type: String, required: 'Email can\'t be empty', max: 100},
    Comments: {type: String, required: 'Email can\'t be empty', max: 100},
    Reserved: {type: String, required: 'Email can\'t be empty', max: 100},
    Track: {type: String, required: 'Email can\'t be empty',  max: 100},
    Genre: {type: String, required: 'Email can\'t be empty', max: 100},

    AvRate: {type: String,}
    //NumRate: {type: String,}
    
});
//ProductSchema.plugin(uniqueValidator);


// Export the model
module.exports = mongoose.model('Song', SongSchema);
//const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



var SongSchema = new Schema({
    song_name: {type: String, required: 'Email can\'t be empty', index: true, unique: true, max: 100},
    //password: {type: String, required: 'Password can\'t be empty', minlength: [4, 'Password must be atleast 4 character long'], max: 100},
    //active: {type: Boolean, required: true, default: false},
    //temporarytoken: {type: String},
    
});
//ProductSchema.plugin(uniqueValidator);


// Export the model
module.exports = mongoose.model('Song', SongSchema);
//const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



var PlaylistSchema = new Schema({ 
    //userN: {type: String, required: 'Email can\'t be empty', max: 100},
    playlistN: {type: String, required: 'Email can\'t be empty', max: 100},
    //status: {type: String, required: 'Email can\'t be empty', max: 100},
    //description: {type: String, required: 'Email can\'t be empty', max: 100},
    //playlistT: {type: Date},
   
    
});
//ProductSchema.plugin(uniqueValidator);


// Export the model
module.exports = mongoose.model('Playlist', PlaylistSchema);
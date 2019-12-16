//const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



var ReviewSchema = new Schema({
    songN: {type: String, required: 'Email can\'t be empty', max: 200},
    comment: {type: String, required: 'Email can\'t be empty', max: 200},
    rating: {type: String, required: 'Email can\'t be empty', max: 200},
    NUMrating: {type: Number},
    owner: {type: String, required: 'Email can\'t be empty', max: 200},
    time: {type: Date},
    
});
//ProductSchema.plugin(uniqueValidator);


// Export the model
module.exports = mongoose.model('Review', ReviewSchema);
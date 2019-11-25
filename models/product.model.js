const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name: {type: String, required: true,max: 100},
    type: {type: String, required: true, max: 100},
    loan: {type: Number, required: true},
    quantity: {type: Number, required: true},
    
});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);
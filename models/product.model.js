//const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


var ProductSchema = new Schema({
    email: {type: String, required: 'Email can\'t be empty', index: true, unique: true, max: 100},
    password: {type: String, required: 'Password can\'t be empty', minlength: [4, 'Password must be atleast 4 character long'], max: 100},
    active: {type: Boolean, required: true, default: false},
    temporarytoken: {type: String},
    
});
//ProductSchema.plugin(uniqueValidator);

// Custom validation for email
ProductSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

// Events
ProductSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});


// Methods
ProductSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

ProductSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}

// Export the model
module.exports = mongoose.model('Product', ProductSchema);
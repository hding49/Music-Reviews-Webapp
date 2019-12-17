const mongoose = require('mongoose');
const Product = require('../models/product.model');
const passport = require('passport');
const _ = require('lodash');
var nodemailer = require('nodemailer'); // Import Nodemailer Package
var sgTransport = require('nodemailer-sendgrid-transport'); // Import Nodemailer Sengrid Transport Package

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

// exports.product_create = function (req, res) {
//     var product = new Product(
//         {
//             email: req.body.email,
//             password: req.body.password,
//             //loan: req.body.loan,
//             //quantity:req.body.quantity,
//             type: "normal",
//             status: "activated",
//         }
//     );

//     product.save(function (err) {
//         if (err) {
//             return next(err);
//         }
//         res.send('Product Created successfully')
//     })
// };

exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.product_read = function (req, res) {
    Product.find(function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send(product);
    });
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send("delete successfully!");
    })
};

// Start Sendgrid Configuration Settings	
var options = {
    auth: {
        api_user: 'hding49', // Sendgrid username Huangyh
        api_key: 'allen123456' // Sendgrid password sendgridHYH961122
    }
}
var client = nodemailer.createTransport(sgTransport(options));
// End Sendgrid Configuration Settings	

const User = mongoose.model('Product');
//var user = new User();
//module.exports.register = (req, res, next) =>
module.exports.register = (req, res, next) => {
    var user = new User();
    user.email = req.body.email;
    user.password = req.body.password;
    user.type = "normal";
    user.status= "activated",
    user.temporarytoken = user.generateJwt();
    user.save((err, doc) => {
 //if (err){ 
        if (!err){
            
            // Create e-mail object to send to user
            var email = {
                from: 'Localhost Staff, staff@localhost.com',
                to: user.email,
                subject: 'Localhost Activation Link',
                text: 'Hello, thank you for registering at localhost.com.',
                html: 'Hello<strong> ' + user.email + '</strong>,<br><br>Thank you for registering at localhost.com. Please click on the link below to complete your activation:<br><br><a href="http://localhost:8080/products/user/open/activate/' + user.email + '">http://localhost:8080/activate</a>'
            };
            // Function to send e-mail to the user
        
            client.sendMail(email, function(err, info) {
                //console.log('1');
                if (err) console.log(err); // If error with sending e-mail, log to console/terminal
            });
            
            //res.json({ success: true, message: 'Account registered! Please check your e-mail for activation link.' }); // Send success message back to controller/request
            res.send(doc);
        }
        else if (err){
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }
   // }
       

    });
}
//auth
module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {       
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}
//resend email
module.exports.resend = (req, res, next) => {
    var user = new User();
    user.email = req.body.email;
    user.password = req.body.password;
    
    //var user = res;
   //send email
    var email = {
        from: 'Localhost Staff, staff@localhost.com',
        to: user.email,
        subject: 'Localhost Activation Link',
        text: 'Hello, thank you for registering at localhost.com.',
        html: 'Hello<strong> ' + user.email + '</strong>,<br><br>Thank you for registering at localhost.com. Please click on the link below to complete your activation:<br><br><a href="http://localhost:8080/products/user/open/activate/' + user.email + '">http://localhost:8080/activate</a>'
    };
    // Function to send e-mail to the user
   

    client.sendMail(email, function(err, info) {
        //console.log('1');
        if (err) console.log(err); // If error with sending e-mail, log to console/terminal
    });
    
    //res.json({ success: true, message: 'Account registered! Please check your e-mail for activation link.' }); // Send success message back to controller/request
    res.send(doc);
}

module.exports.userProfile = (req, res, next) =>{
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, user : _.pick(user,['email','type']) });
        }
    );
}


// Route to activate the user's account	
module.exports.activateUser = (req, res) => {
//console.log(req.params.token);
    User.findOneAndUpdate({email:req.params.token},{$set:{active:true}}).then((updatedDoc)=>{
        //user.active = true;
        res.send('<html><a href="http://localhost:4200/login">back</a></html>');
    });

};

module.exports.google_login = (req, res) => {
    var user = new User();
    user.email = req.body.email;
    user.password = "666666";
    user.active = true;
    //user.temporarytoken = false;
    

    user.save(function (err, doc) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(doc);
        }
    })
};

module.exports.admin_login = (req, res) => {
    var user = new User();
    user.email = "site manager";
    user.password = "western2019";
    user.active = true;
    //user.temporarytoken = false;
    

    user.save(function (err, doc) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(doc);
        }
    })
};
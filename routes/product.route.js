const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);


router.post('/create', product_controller.product_create);

router.get('/read', product_controller.product_read);

//router.get('/:id', product_controller.product_details);

router.put('/:id/update', product_controller.product_update);

router.delete('/:id/delete', product_controller.product_delete);

const jwtHelper = require('../config/jwtHelper');

router.post('/register', product_controller.register);
router.post('/authenticate', product_controller.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, product_controller.userProfile);
router.put('/activate/:token', product_controller.activateUser);

module.exports = router;

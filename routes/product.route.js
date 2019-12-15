const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');
const song_controller = require('../controllers/song.controller');
const review_controller = require('../controllers/review.controller');
const playlist_controller = require('../controllers/playlist.controller');


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
router.get('/activate/:token', product_controller.activateUser);

router.post('/googlelogin', product_controller.google_login);
router.post('/adminlogin', product_controller.admin_login);

//song part
router.post('/songcreate', song_controller.song_create);
router.get('/songsearch/:id', song_controller.song_search);
router.get('/songsort', song_controller.song_top10);

//review part
router.post('/reviewcreate', review_controller.review_create);
router.get('/reviewread', review_controller.review_read);
router.get('/reviewsearch/:id', review_controller.review_search);

//playlist part
router.post('/playlistcreate', playlist_controller.playlist_create);
router.get('/playlistread/:id', playlist_controller.playlist_search);
//router.put('/:playlistN/playlistupdate', playlist_controller.playlist_update);


module.exports = router;

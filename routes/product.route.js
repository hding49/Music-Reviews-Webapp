const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');
const song_controller = require('../controllers/song.controller');
const review_controller = require('../controllers/review.controller');
const playlist_controller = require('../controllers/playlist.controller');
const admin_controller = require('../controllers/admin.controller');


// a simple test url to check that all of our files are communicating correctly.
//user
router.get('/user/open/test', product_controller.test);


router.post('/user/open/create', product_controller.product_create);

router.get('/user/open/read', product_controller.product_read);

//router.get('/:id', product_controller.product_details);

router.put('/user/open/:id/update', product_controller.product_update);

router.delete('/user/open/:id/delete', product_controller.product_delete);

const jwtHelper = require('../config/jwtHelper');

router.post('/user/secure/register', product_controller.register);
router.post('/user/secure/authenticate', product_controller.authenticate);
router.get('/user/open/userProfile',jwtHelper.verifyJwtToken, product_controller.userProfile);
router.get('/user/open/activate/:token', product_controller.activateUser);

router.post('/user/secure/googlelogin', product_controller.google_login);
router.post('/user/secure/adminlogin', product_controller.admin_login);

//song part
router.post('/song/secure/songcreate', song_controller.song_create);
router.get('/song/open/songsearch/:id', song_controller.song_search);
router.get('/song/open/songsort', song_controller.song_top10);

//review part
router.post('/review/secure/reviewcreate', review_controller.review_create);
router.get('/review/open/reviewread', review_controller.review_read);
router.get('/review/open/reviewsearch/:id', review_controller.review_search);
//router.get('/review/open/mostrecent/:songname', review_controller.review_mostrecent);

//playlist part
router.post('/playlist/secure/playlistcreate', playlist_controller.playlist_create);
router.get('/playlist/open/playlistread/:id', playlist_controller.playlist_search);
router.post('/playlist/secure/playlistupdate', playlist_controller.playlist_update);
//router.put('/:playlistN/playlistupdate', playlist_controller.playlist_update);

//admin
router.post('/admin/secure/settype', admin_controller.setType);
router.post('/admin/secure/setsong', admin_controller.setSong);
router.get('/admin/secure/getsongs', admin_controller.getSongs);
router.get('/admin/secure/getusers', admin_controller.getUsers);


module.exports = router;

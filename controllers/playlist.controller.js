const mongoose = require('mongoose');
const Playlist = require('../models/playlist.model');

exports.playlist_create = function (req, res) {
    var playlist = new Playlist(
        {
            playlistN: req.body.playlistN, 
            //songN: req.body.songN,
           // rating: req.body.rating,
           // owner: req.body.owner,
           // time: req.body.time,
        
        
        }
    );

    playlist.save((err, doc) => {
       if (!err){
        res.send(doc);
               }
               else if (err){
                
                       return next(err);
               }
           });
};

exports.song_read = function (req, res) {
    Song.find(function (err, song) {
        if (err) return next(err);
        res.send(song);
    })
};

exports.song_update = function (req, res) {
    Song.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, song) {
        if (err) return next(err);
        res.send(song);
    });
};

exports.song_delete = function (req, res) {
    Song.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send("delete successfully!");
    })
};



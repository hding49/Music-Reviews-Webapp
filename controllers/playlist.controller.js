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
                       if (err.code == 11000)
                           res.status(422).send(['Duplicate playlist name found.']);
                       else
                           return next(err);
                   }
           });
};

exports.playlist_read = function (req, res) {
    Playlist.find(function (err, playlist) {
        if (err) return next(err);
        res.send(playlist);
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



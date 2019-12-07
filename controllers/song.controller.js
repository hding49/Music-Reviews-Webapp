const mongoose = require('mongoose');
const Song = require('../models/song.model');

exports.song_create = function (req, res) {
    var song = new Song(
        {
            song_name: req.body.song_name,
            //password: req.body.password,
            //loan: req.body.loan,
            //quantity:req.body.quantity,
        }
    );

    song.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('song Created successfully')
    })
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
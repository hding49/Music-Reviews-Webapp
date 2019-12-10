const mongoose = require('mongoose');
const Song = require('../models/song.model');

exports.song_create = function (req, res) {
    var song = new Song(
        {
            Title: req.body.Title,
            Artist: req.body.Artist,
            Album: req.body.Album,
            Year: req.body.Year,
            Comments: req.body.Comments,
            Reserved: req.body.Reserved,
            Track: req.body.Track,
            Genre: req.body.Genre,
        }
    );

    song.save((err, doc) => {
       if (!err){
        res.send(doc);
               }
               else if (err){
                   if (err.code == 11000)
                       res.status(422).send(['Duplicate song name found.']);
                   else
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




module.exports.song_search = (req, res, next) => {
    var word = req.params.id;
    var _filter = {
        $or: [
            { Title: { $regex: word, $options: '$i' } },
            { Artist: { $regex: word, $options: '$i' } },
            { Album: { $regex: word, $options: '$i' } },
            { Year: { $regex: word, $options: '$i' } },
            { Comments: { $regex: word, $options: '$i' } },
            { Reserved: { $regex: word, $options: '$i' } },
            { Track: { $regex: word, $options: '$i' } },
            { Genre: { $regex: word, $options: '$i' } }
        ]
    }
    
    Song.find(_filter, (err, song) => {
        if (!song)
            return res.status(404).json({ status: false, message: 'No search result found.' });
        else
            return res.status(200).send(song);
    })
}

module.exports.song_sort = (req, res, next) => {


//song.find().sort({"AvRate":-1}).limit(10).then((song) => {
    
 // return res.status(200).send(song);
//})

var arr = new Array();
    Review.aggregate([
        { "$group": { _id: "$songN", count: { $sum: 1 } } }
    ]).sort({ "count": -1 }).limit(10).then((list) => {
        for (var i = 0; i < list.length; i++) { arr.push(list[i]); } // get _id from { "_id": "song5", "count": 4 }
        console.log(arr);
        return res.status(200).send(arr);
    })

}


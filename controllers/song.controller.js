const mongoose = require('mongoose');
const Song = require('../models/song.model');

exports.song_create = function (req, res) {
    var song = new Song();
        
           song.Title = req.body.Title;
           song.Artist = req.body.Artist;
           song.Album = req.body.Album;
           song.Year = req.body.Year;
           song.Comments = req.body.Comments;
           song.Reserved = req.body.Reserved;
            song.Track = req.body.Track;
            song.Genre = req.body.Genre;
            song.AvRate = "0";
            song.NumRate = 0;
            song.type = "active";
            //song.type = req.body.type;
            //song.MostRecent = " ";
          
        
   

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
    word = word.replace(/\s/g, "");
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


module.exports.song_top10 = (req, res, next) => {
    var array = new Array();
    //var song = new Song();
    Song.find().sort({AvRate: -1}).limit(10).then((song) => {
        //console.log(song);
        for (var i = 0; i < song.length; i++) {
            var searchSong = {
                Top: i+1,    
                Title: song[i].Title,
                    Artist: song[i].Artist,
                    Album: song[i].Album,
                    year: song[i].Year,
                    Comments: song[i].Comments,
                    Reserved: song[i].Reserved,
                    Track: song[i].Track,
                    Genre: song[i].Genre,
                    AvRate: song[i].AvRate,
                    NumRate: song[i].NumRate
            };
            array.push(searchSong);
        }
        return res.status(200).send(array);
    })
};


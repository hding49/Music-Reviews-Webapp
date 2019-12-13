const mongoose = require('mongoose');
const Review = require('../models/review.model');
const Song = require('../models/song.model');
var song = new Song();

exports.review_create = function (req, res) {
    var review = new Review(
        {
            comment: req.body.comment,
            songN: req.body.songN,
           // rating: req.body.rating,
           // owner: req.body.owner,
            time: Date(),
        
        
        }
    );

    review.save((err, doc) => {
       if (!err){
        res.send(doc);
               }
               else if (err){
                
                       return next(err);
               }
           });



    song.findOne({Title:req.params.title},(err,song)=>{

       song.update({$set:{active:true}}).then((updatedDoc)=>{
            
       });

    });


};

exports.review_read = function (req, res) {
    Review.find(function (err, review) {
        if (err) return next(err);
        res.send(review);
    })
};

module.exports.review_search = (req, res, next) => {
    var word = req.params.id;
    word = word.replace(/\s/g, "");
    var _filter = {
        $or: [
            { songN: { $regex: word, $options: '$i' } },
         
        ]
    }
    
    Review.find(_filter, (err, review) => {
        if (!review)
            return res.status(404).json({ status: false, message: 'No search result found.' });
        else
            return res.status(200).send(review);
    })
}

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



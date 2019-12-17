const mongoose = require('mongoose');
const Review = require('../models/review.model');
const Song = require('../models/song.model');
var song = new Song();
//create review
exports.review_create = async function (req, res) {
    var review = new Review(
        {
            comment: req.body.comment,
            songN: req.body.songN,
            rating: req.body.rating,
            owner: req.body.owner,
            time: Date(),
            NUMrating :0,
        
        
        }
    );
    review.save();

    await Song.findOne({Title:req.body.songN},(err,song)=>{

        test1 = String(parseInt(song.NumRate) + 1);
        test2 = String((parseInt(song.AvRate) + parseInt(review.rating))/parseInt(test1));
        console.log(test1);
        console.log(test2);
    });

      await Song.findOneAndUpdate({Title:req.body.songN}, {$set: {NumRate:test1, AvRate:test2} } ).then((updatedDoc)=>{
            console.log("ok");
            res.send(updatedDoc);
       });

       

}

exports.review_read = function (req, res) {
    Review.find(function (err, review) {
        if (err) return next(err);
        res.send(review);
    })
};
//search review
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
//most recent review
module.exports.review_mostrecent = (req, res, next) => {
    var word = req.params.songname;
  
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
    }).sort({time: -1});
}

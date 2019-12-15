const mongoose = require('mongoose');
const Playlist = require('../models/playlist.model');

exports.playlist_create = async function (req, res) {
    songs = new Array;
    songs.push(req.body.songs);
    var playlist = new Playlist(
        {
            playlistN: req.body.playlistN, 
            //songN: req.body.songN,
           // rating: req.body.rating,
            owner: req.body.owner,
           // time: req.body.time,
           
           songs: songs, 
        
        
        }
    );
    
 
try{
    sameplaylist = await Playlist.findOne({playlistN:req.body.playlistN});
    //console.log(sameplaylist);
}catch(error){
    next(error);
}
    
    if (sameplaylist == null){
        await playlist.save((err, doc) => {
            if (!err){
                //console.log(doc);
                res.send(doc);
                       }
                       else {
                               return next(err);
                       }
               });
    }

    else{
        if (sameplaylist.owner == req.body.owner){
          var songlist = sameplaylist.songs;
          songlist.push(req.body.songs);
          await Playlist.findOneAndUpdate( {playlistN:req.body.playlistN}, {$set: {songs:songlist} } ).then((updatedDoc)=>{
              res.status(200).send(updatedDoc);   
              //console.log(updatedDoc);      
               
        });
        //res.send(updatedPlaylist);


        }
        else{
            return res.status(422).send('duplicate playlist');
        }
    }
    
};

exports.playlist_read = function (req, res) {

    Playlist.find(function (err, playlist) {
        if (err) return next(err);
        res.send(playlist);
    })

    
};

module.exports.playlist_search = (req, res, next) => {
    var word = req.params.id;
  
    var _filter = {
        $or: [
      
            { owner: { $regex: word, $options: '$i' } },
   
          
        ]
    }
    
    Playlist.find(_filter, (err, playlist) => {
        if (!playlist)
            return res.status(404).json({ status: false, message: 'No search result found.' });
        else
            return res.status(200).send(playlist);
    })
}

exports.song_update = function (req, res) {
    Song.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, song) {
        if (err) return next(err);
        res.send(song);
    });
};

exports.playlist_delete = function (req, res) {
    Song.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send("delete successfully!");
    })
};
module.exports.playlist_update = async (req, res) => {
//exports.playlist_update = async function (req, res) {
    sameplaylist = Playlist.findOne({playlistN:req.params.playlistN});
    if (sameplaylist == null){
        await playlist.save((err, doc) => {
            if (!err){
                console.log(doc);
                res.send(doc);
                       }
                       else {
                               return next(err);
                       }
               });
    }

    else{
        if (sameplaylist.playlistN == req.doby.playlistN){
          //var songlist
          Playlist.findOneAndUpdate( {$set: {playlistN:sameplaylist.playlistN} } ).then((updatedDoc)=>{
              res.status(200).send(updatedDoc);          
        });

        }
        else{
            return next(err);
        }
    }
    //
//}) 
};

module.exports.playlist_update = async (req, res, next) => {
var songs = new Array();
await Playlist.findOne({playlistN:req.body.playlistN},(err,playlist)=>{
    for (var a = 0; a < playlist.songs.length; a++)
    {   console.log(playlist.songs);
        if (playlist.songs[a] != req.body.song)
        {
            
            songs.push(playlist.songs[a]);
        }
        console.log(songs);
    }

})

Playlist.findOneAndUpdate( {playlistN:req.body.playlistN}, {$set: {songs:songs}} ).then((updatedDoc)=>{
    res.send(updatedDoc);          
});

};

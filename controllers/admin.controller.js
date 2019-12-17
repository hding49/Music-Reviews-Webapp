const mongoose = require('mongoose');
const Song = require('../models/song.model');
const Product = require('../models/product.model');
//set user type
module.exports.setType = async (req, res, next) =>{
    var email = req.body.email;
    var type = req.body.type;

    await Product.findOneAndUpdate( {email : req.body.email}, {$set: {type : req.body.type} } ).then((updatedDoc)=>{
        res.send(updatedDoc);   
        //console.log(updatedDoc);      
         
  });

}
//set user status
module.exports.setStatus = async (req, res, next) =>{
    var email = req.body.email;
    var status = req.body.status;

    await Product.findOneAndUpdate( {email : req.body.email}, {$set: {status : req.body.status} } ).then((updatedDoc)=>{
        res.send(updatedDoc);   
        //console.log(updatedDoc);      
         
  });

}
//set song type
module.exports.setSong = async (req, res, next) =>{
    var title = req.body.Title;
    var Songtype = req.body.type;

    await Song.findOneAndUpdate( {Title : req.body.Title}, {$set: {type : req.body.type} } ).then((updatedDoc)=>{
        res.send(updatedDoc);   
        //console.log(updatedDoc);      
         
  });

}
//get songs
module.exports.getSongs = async (req, res, next) =>{
   
try{
   var all = await Song.find();

   if(!all)
   {
       return res.status(404).json({ status: false, message: 'song is not found'});
   }

   else
   {
       var allsong = new Array();
       for( var i =0; i <all.length; i++)
       {
           allsong.push(all[i]);
       }
     return res.status(200).send(allsong);
   }
}

catch(err){
    res.json({message:err});

}


}
//get users
module.exports.getUsers = async (req, res, next) =>{
   
    try{
       var all = await Product.find();
    
       if(!all)
       {
           return res.status(404).json({ status: false, message: 'user is not found'});
       }
    
       else
       {
           var alluser = new Array();
           for( var i =0; i <all.length; i++)
           {
               alluser.push(all[i]);
           }
         return res.status(200).send(alluser);
       }
    }
    
    catch(err){
        res.json({message:err});
    
    }
    
    
    }
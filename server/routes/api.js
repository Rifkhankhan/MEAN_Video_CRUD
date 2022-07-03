const express = require('express')
const router = express.Router()
const mongoose  = require('mongoose')

const db = "mongodb://localhost/VideoCrud"

const Video = require('../models/video')
mongoose.Promise = global.Promise

mongoose.connect(db,function(err){
  if(err)
  {
    console.error("Error",err);
  }
})

router.get('/',function(req,res){
  res.send('api works')
});

router.get('/videos',function(req,res){
  console.log("Get Request For all Videos");
  Video.find({}).exec(function(err,videos){
    if(err)
    {
      console.log('Error Retriving Videos');
    }
    else
    {
      res.json(videos)
    }
  })
})


router.get('/videos/:id',function(req,res){
  console.log("Get Request For a Video");
  Video.findById(req.params.id).exec(function(err,video){
    if(err)
    {
      console.log('Error Retriving Video');
    }
    else
    {
      res.json(video)
    }
  })
})


router.post('/insertVideo',function(req,res){
  console.log("Post Request For a Video");
  var newVideo = new Video();
  newVideo.title = req.body.title
  newVideo.url = req.body.url
  newVideo.description = req.body.description

  newVideo.save(function(err,insertedVideo){
    if(err)
    {
      console.log("Error saving Video");
    }
    else
    {
      res.json(insertedVideo)
    }
  })
})



router.post('/updateVideo/:id',function(req,res){
  console.log("Update Request For a Video");

  Video.findByIdAndUpdate(req.params.id,{
    $set:{
      title:req.body.title,
      url:req.body.url,
      description:req.body.description
    }
  },
  {
    new:true
  },
  function(err,updatedVideo){
    if(err)
    {
      res.send("Error Updating Video")
    }
    else
    {
      res.json(updatedVideo)
    }
  })
})


router.delete('/Delete/:id',function(req,res){
  console.log("Delete Request For a Video");

  Video.findByIdAndRemove(req.params.id,function(err,deletedVideo){
    if(err)
    {
      res.send("Error Deleting Video")
    }
    else
    {
      res.json(deletedVideo)
    }
  })

})


module.exports = router

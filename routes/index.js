var express = require('express');
var router = express.Router();

var videos = [
  {
    url:"https://d3d0fl6l6djog.cloudfront.net/IPL-2017/SUNRISERSVSROYALCHALLENGERS050417/SUNRISERSVSROYALCHALLENGERS050417-SH-Inn1-Over1-Ball1.mp4",
    title:"Virat Smasshes SA - Ind vs SA",
    length:"4:58",
    date:"October 6 2017"

  },
  {
    url:"https://d3d0fl6l6djog.cloudfront.net/IPL-2017/SUNRISERSVSROYALCHALLENGERS050417/SUNRISERSVSROYALCHALLENGERS050417-SH-Inn1-Over1-Ball2.mp4",
    title:"Ind vs SA - SA tour virat 50",
    length:"4:58",
    date:"November 8 2017"

  },
  {
    url:"https://d3d0fl6l6djog.cloudfront.net/IPL-2017/SUNRISERSVSROYALCHALLENGERS050417/SUNRISERSVSROYALCHALLENGERS050417-SH-Inn1-Over1-Ball3.mp4",
    title:"NZ vs Australia - Best Match",
    length:"7:58",
    date:"September 6 2017"

  },
  {
    url:"https://d3d0fl6l6djog.cloudfront.net/IPL-2017/SUNRISERSVSROYALCHALLENGERS050417/SUNRISERSVSROYALCHALLENGERS050417-SH-Inn1-Over1-Ball4.mp4",
    title:"Ind vs England - Double century",
    length:"5:30",
    date:"August 18 2017"

  },
  {
    url:"https://d3d0fl6l6djog.cloudfront.net/IPL-2017/SUNRISERSVSROYALCHALLENGERS050417/SUNRISERSVSROYALCHALLENGERS050417-SH-Inn1-Over1-Ball5.mp4",
    title:"SA vs WestIndies - Gayle hits 50",
    length:"8:15",
    date:"December 6 2017"

  },
  {
    url:"https://d3d0fl6l6djog.cloudfront.net/IPL-2017/SUNRISERSVSROYALCHALLENGERS050417/SUNRISERSVSROYALCHALLENGERS050417-SH-Inn1-Over1-Ball6.mp4",
    title:"India vs Pakistan - Dhoni hits 50",
    length:"3:15",
    date:"January 4 2018"

  }


];

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.json(videos);
});


router.get('/videos',function(req,res,next) {
  res.json(videos);
});


module.exports = router;

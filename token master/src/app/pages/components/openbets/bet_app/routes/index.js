var express = require('express');
var router = express.Router();
var BET = require('../models/bet');
var USER = require('../models/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/betList', async function(req, res) {
  try {
    let betList = await BET.find({ "users.7": { "$exists": false } })
    if(betList){
      res.render('bets', { betList: betList });
    } else {
      res.render('error');
    }
  } catch (err) {
    console.error(err);
    res.render('error');    
  }
});

router.get('/judgementList', async function(req, res) {
  try {
    let judgementList = await BET.find({ "users.7": { "$exists": true } })
    if(judgementList){
      res.render('judgements', { judgementList: judgementList });
    } else {
      res.render('error');
    }
  } catch (err) {
    console.error(err);
    res.render('error');    
  }
});

router.get('/addUsers', async function(req, res) {
  var users = [
    {
      name: "test1",
      email: "test1@gmail.com"
    },
    {
      name: "test2",
      email: "test2@gmail.com"
    },{
      name: "test3",
      email: "test3@gmail.com"
    },{
      name: "test4",
      email: "test4@gmail.com"
    },{
      name: "test5",
      email: "test5@gmail.com"
    },{
      name: "test6",
      email: "test6@gmail.com"
    },{
      name: "test7",
      email: "test7@gmail.com"
    },{
      name: "test8",
      email: "test8@gmail.com"
    },{
      name: "test9",
      email: "test9@gmail.com"
    },{
      name: "test10",
      email: "test10@gmail.com"
    }
  ]
  USER.insertMany(users).then(function(){
    console.log("User inserted")  // Success
    }).catch(function(error){
        console.log(error)      // Failure
    });
})


module.exports = router;

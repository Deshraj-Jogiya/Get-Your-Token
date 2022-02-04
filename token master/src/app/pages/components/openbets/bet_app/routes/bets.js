const { formatArgs } = require('debug');
var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const BET = require('../models/bet');
const USER = require('../models/user')


/* ADD get. */
router.post('/', async function(req, res, next) {
  var bet = new BET(req.body);
  await bet
  .save()
  .then(data => {
    res.json({status: true});
  })
  .catch(err => res.json({status: false}));
});

router.post('/userBetting', async function(req, res, next) {
  var bet = await BET.findOne({_id: req.body.id})
  var bet_users = bet.users
  var user = await USER.findOne({email: req.body.user})
  if (bet_users.includes(user._id)) {
    res.json({message: "You have already betting in this bet !"})
  } else {
    bet_users.push(user._id)
    await BET.findByIdAndUpdate(req.body.id, {users: bet_users})
    res.json({message: "Betting successfully !"})
  }
})

module.exports = router;

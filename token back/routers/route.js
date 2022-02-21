var express = require('express');
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({ extended: false });
var validator = require('express-validator');


module.exports = function (app) {

      function isUserAllowed(req, res, next) {
            sess = req.session;
            if (sess.user) {
                  return next();
            }
            else { res.redirect('/login'); }
      }

      //Dashboard:-

      app.get('/',isUserAllowed,function (req, res) {
            res.locals = { title: 'Dashboard' };
            res.render('Dashboard/index');
      });

      app.get('/financials',isUserAllowed, function (req, res) {
            res.locals = { title: 'Dashboard' };
            res.render('Dashboard/Financials');
      });

      app.get('/administrators',isUserAllowed, function (req, res) {
            res.locals = { title: 'Dashboard' };
            res.render('Dashboard/Administrators');
      });

      app.get('/activities',isUserAllowed, function (req, res) {
            res.locals = { title: 'Dashboard' };
            res.render('Dashboard/Activities');
      });
      
      // Achievements ::
      app.get('/achievement-list', isUserAllowed, (req, res) => {
            res.locals = { title: "Achievements" };
            res.render('Achievements/achievement-list');
      });

      app.get('/achievement-rookie', isUserAllowed, (req, res) => {
            res.locals = { title: "Achievements" };
            res.render('Achievements/achievement-rookie');
      });

      app.get('/achievement-skull', isUserAllowed, (req, res) => {
            res.locals = { title: "Achievements" };
            res.render('Achievements/achievement-skull');
      });

      app.get('/achievement-comet', isUserAllowed, (req, res) => {
            res.locals = { title: "Achievements" };
            res.render('Achievements/achievement-comet');
      });

      app.get('/achievement-raising', isUserAllowed, (req, res) => {
            res.locals = { title: "Achievements" };
            res.render('Achievements/achievement-raising');
      });

      app.get('/achievement-shredder', isUserAllowed, (req, res) => {
            res.locals = { title: "Achievements" };
            res.render('Achievements/achievement-shredder');
      });

      app.get('/achievement-superstar', isUserAllowed, (req, res) => {
            res.locals = { title: "Achievements" };
            res.render('Achievements/achievement-superstar');
      });

      // Bets ::

      app.get('/create-bet', isUserAllowed, (req, res) => {
            res.locals = { title: "Create Bet" };
            res.render('Bets/create');
      });

      app.get('/running-bets', isUserAllowed, (req, res) => {
            res.locals = { title: "Running Bets" };
            res.render('Bets/running-bets');
      });

      app.get('/open-bets', isUserAllowed, (req, res) => {
            res.locals = { title: "Open Bets" };
            res.render('Bets/open-bets');
      });

      app.get('/judging-bets', isUserAllowed, (req, res) => {
            res.locals = { title: "Judging Bets" };
            res.render('Bets/judging-bets');
      });

      app.get('/close-bets', isUserAllowed, (req, res) => {
            res.locals = { title: "Close Bets" };
            res.render('Bets/close-bets');
      });

      app.get('/approved-bets', isUserAllowed, (req, res) => {
            res.locals = { title: "Approved Bets" };
            res.render('Bets/approved-bets');
      });

      app.get('/supreme-court-bets', isUserAllowed, (req, res) => {
            res.locals = { title: "Supreme court" };
            res.render('Bets/supreme-court-bets');
      });

      // NFTs

      app.get('/nft-list', isUserAllowed, (req, res) => {
            res.locals = { title: "All NFTs" };
            res.render('NFT/nft-list');
      });

      app.get('/nft-packs', isUserAllowed, (req, res) => {
            res.locals = { title: "NFT Packs" };
            res.render('NFT/nft-packs');
      });

      app.get('/nft-marketplace', isUserAllowed, (req, res) => {
            res.locals = { title: "NFT Marketplace" };
            res.render('NFT/nft-marketplace');
      });

      app.get('/nft-categories', isUserAllowed, (req, res) => {
            res.locals = { title: "NFT Categories" };
            res.render('NFT/nft-categories');
      });

      app.get('/nft-tags', isUserAllowed, (req, res) => {
            res.locals = { title: "NFT Tags" };
            res.render('NFT/nft-tags');
      });

      app.get('/create-nft', isUserAllowed, (req, res) => {
            res.locals = { title: "Create new nft" };
            res.render('NFT/create-nft');
      });

      // Sign Up

      app.get('/referrals-signup', isUserAllowed, (req, res) => {
            res.locals = { title: "Referral" };
            res.render('Signup/referrals');
      });

      app.get('/penky-signup', isUserAllowed, (req, res) => {
            res.locals = { title: "Penky" };
            res.render('Signup/penky');
      });

      app.get('/packs-signup', isUserAllowed, (req, res) => {
            res.locals = { title: "Packs" };
            res.render('Signup/packs');
      });

      //Dashboard:-
      
       // NFTs

       app.get('/nft-list', isUserAllowed, (req, res) => {
            res.locals = { title: "All NFTs" };
            res.render('NFT/nft-list');
      });

      app.get('/nft-packs', isUserAllowed, (req, res) => {
            res.locals = { title: "NFT Packs" };
            res.render('NFT/nft-packs');
      });

      app.get('/nft-marketplace', isUserAllowed, (req, res) => {
            res.locals = { title: "NFT Marketplace" };
            res.render('NFT/nft-marketplace');
      });

      app.get('/nft-categories', isUserAllowed, (req, res) => {
            res.locals = { title: "NFT Categories" };
            res.render('NFT/nft-categories');
      });

      app.get('/nft-tags', isUserAllowed, (req, res) => {
            res.locals = { title: "NFT Tags" };
            res.render('NFT/nft-tags');
      });

      app.get('/create-nft', isUserAllowed, (req, res) => {
            res.locals = { title: "Create new nft" };
            res.render('NFT/create-nft');
      });


      // Players :-

      app.get('/all', isUserAllowed, function (req, res) {
            res.locals = { title: 'Players' };
            res.render('Players/index');
      });

      app.get('/leaderboard', isUserAllowed, function (req, res) {
            res.locals = { title: 'Players' };
            res.render('Players/leaderboard');
      });

      app.get('/banned', isUserAllowed, function (req, res) {
            res.locals = { title: 'Players' };
            res.render('Players/Banned');
      });

      app.get('/deleted', isUserAllowed, function (req, res) {
            res.locals = { title: 'Players' };
            res.render('Players/Deleted');
      });

      app.get('/levels', isUserAllowed, function (req, res) {
            res.locals = { title: 'Players' };
            res.render('Players/Levels');
      });

      //Notification:-

      app.get('/automatic',isUserAllowed, function (req, res) {
            res.locals = { title: 'Notification' };
            res.render('Notifications/Automatic');
      });

      app.get('/manual',isUserAllowed, function (req, res) {
            res.locals = { title: 'Notification' };
            res.render('Notifications/Manual');
      });

      app.get('/scheduled',isUserAllowed, function (req, res) {
            res.locals = { title: 'Notification' };
            res.render('Notifications/Scheduled');
      });

      app.get('/history',isUserAllowed, function (req, res) {
            res.locals = { title: 'Notification' };
            res.render('Notifications/History');
      });

      //Jackpot:-

      app.get('/jleaderboard', isUserAllowed, function (req, res) {
            res.locals = { title: 'Jackpot' };
            res.render('Jackpot/Leaderboard');
      });

      app.get('/jmanual', isUserAllowed, function (req, res) {
            res.locals = { title: 'Jackpot' };
            res.render('Jackpot/Manual');
      });

      app.get('/jhistory', isUserAllowed, function (req, res) {
            res.locals = { title: 'Jackpot' };
            res.render('Jackpot/History');
      });


      // Achievements ::
      app.get('/achievement-list', (req, res) => {
            res.locals = { title: "Achievements" };
            res.render('Achievements/achievement-list');
      });

      app.get('/achievement-rookie', (req, res) => {
            res.locals = { title: "Achievements" };
            res.render('Achievements/achievement-rookie');
      });

      app.get('/achievement-skull', (req, res) => {
            res.locals = { title: "Achievements" };
            res.render('Achievements/achievement-skull');
      });

      app.get('/achievement-comet', (req, res) => {
            res.locals = { title: "Achievements" };
            res.render('Achievements/achievement-comet');
      });

      app.get('/achievement-raising', (req, res) => {
            res.locals = { title: "Achievements" };
            res.render('Achievements/achievement-raising');
      });

      app.get('/achievement-shredder', (req, res) => {
            res.locals = { title: "Achievements" };
            res.render('Achievements/achievement-shredder');
      });

      app.get('/achievement-superstar', (req, res) => {
            res.locals = { title: "Achievements" };
            res.render('Achievements/achievement-superstar');
      });


      //Hero Header:-

      app.get('/header1', isUserAllowed, function (req, res) {
            res.locals = { title: 'HeroHeader' };
            res.render('HeroHeader/header1');
      });

      app.get('/header2', isUserAllowed, function (req, res) {
            res.locals = { title: 'HeroHeader' };
            res.render('HeroHeader/header2');
      });

      app.get('/header3', isUserAllowed, function (req, res) {
            res.locals = { title: 'HeroHeader' };
            res.render('HeroHeader/header3');
      });

      app.get('/createnew', isUserAllowed, function (req, res) {
            res.locals = { title: 'HeroHeader' };
            res.render('HeroHeader/createnew');
      });


      // Shop
      app.get('/shop-products', (req, res) => {
            res.locals = { title: "Products" };
            res.render('Shop/all-products');
      });
      app.get('/shop-penky', function (req, res) {
            res.locals = { title: 'Blog Dashboard' };
            res.render('Shop/penky');
      });

      app.get('/shop-nft-packs', function (req, res) {
            res.locals = { title: 'Saas Dashboard' };
            res.render('Shop/nft-packs');
      });

      app.get('/shop-bet-packs', function (req, res) {
            res.locals = { title: 'Crypto Dashboard' };
            res.render('Shop/bet-packs');
      });

      app.get('/create-product', (req, res) => {
            res.locals = { title: "Product detail" };
            res.render('Shop/create-product');
      });

      app.get('/shop-sales', (req, res) => {
            res.locals = { title: "Product detail" };
            res.render('Shop/sales');
      });

}  

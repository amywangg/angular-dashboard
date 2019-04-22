var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var File = require('../models/File.js');



/* GET ALL File */
router.get('/', function(req, res, next) {
  File.find(function (err, files) {
    if (err) return next(err);
    res.json(files);
  });
});

/* GET SINGLE File BY ID */
router.get('/:id', function(req, res, next) {
  File.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE File */
router.post('/', function(req, res, next) {
  File.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE File */
router.put('/:id', function(req, res, next) {
  File.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE File */
router.delete('/:id', function(req, res, next) {
  File.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
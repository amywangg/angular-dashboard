// Importing important packages
const express = require('express');

// Using express and routes
const app = express();
const fileRoute = express.Router();

// file module which is required and imported
let fileModel = require('../models/File.model');

// To Get List Of files
fileRoute.route('/').get(function (req, res) {
  fileModel.find(function (err, file) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(file);
    }
  });
});

// To Add New file
fileRoute.route('/').post(function (req, res) {
  let file = new fileModel(req.body);
  file.save()
    .then(game => {
      res.status(200).json({ 'file': 'file Added Successfully' });
    })
    .catch(err => {
      res.status(400).send("Something Went Wrong");
    });
});

// To Get file Details By file ID
fileRoute.route('/editfile/:id').get(function (req, res) {
  let id = req.params.id;
  fileModel.findById(id, function (err, file) {
    res.json(file);
  });
});

// To Update The file Details
fileRoute.route('/updatefile/:id').post(function (req, res) {
  fileModel.findById(req.params.id, function (err, file) {
    if (!file)
      return next(new Error('Unable To Find file With This Id'));
    else {
      file.name = req.body.name;
      file.path = req.body.path;
      file.application = req.body.application;
      file.server = req.body.server;
      file.updated_date = Date.now; 

      file.save().then(emp => {
        res.json('file Updated Successfully');
      })
        .catch(err => {
          res.status(400).send("Unable To Update file");
        });
    }
  });
});

// To Delete The file
fileRoute.route('/deletefile/:id').get(function (req, res) {
  fileModel.findByIdAndRemove({ _id: req.params.id }, function (err, file) {
    if (err) res.json(err);
    else res.json('file Deleted Successfully');
  });
});

module.exports = fileRoute;
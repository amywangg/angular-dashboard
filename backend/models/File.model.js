var mongoose = require('mongoose');
var filePluginLib = require('mongoose-file');
var filePlugin = filePluginLib.filePlugin;
var make_upload_to_model = filePluginLib.make_upload_to_model;


var FileSchema = new mongoose.Schema({
    name: String,
    path: String,
    application: String,
    server: String,
    updated_date: { type: Date, default: Date.now },
  });
  // FileSchema.plugin(filePlugin, {
  //   name: "file"
  // });

  module.exports = mongoose.model('File', FileSchema);
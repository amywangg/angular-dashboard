const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let FileSchema = new Schema({
  name: { type: String, required:true },
  path: { type: String, required:true  },
  application: { type: String , required:true },
  server: { type: String , required:true },
  updated_date: { type: Date, default: Date.now },
},
  {
    collection: 'files'
  });


module.exports = mongoose.model('File', FileSchema);
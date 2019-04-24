const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for log file itself to be uploaded

let LogFileSchema = new Schema({
    type: String,
    data: Buffer
},
    {
        collection: 'upload.files'
    });


module.exports = mongoose.model('LogFile', LogFileSchema);
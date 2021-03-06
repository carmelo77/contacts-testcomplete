const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const ContactSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    location: { type: String, required: true }
});

module.exports = mongoose.model('Contact', ContactSchema);
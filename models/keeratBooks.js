const mongoose = require('mongoose');

const keeratBooksSchema = new mongoose.Schema({
BookName : { type:  String, description: "Required Field", required: false },
});

module.exports = mongoose.model('keeratBooks', keeratBooksSchema);
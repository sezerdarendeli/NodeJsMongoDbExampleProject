var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var todoSchema = new Schema({
    number: String,
    date: String,
});

module.exports = mongoose.model("inComingNumber", todoSchema);
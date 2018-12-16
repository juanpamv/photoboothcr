const Mongoose = require("mongoose");

Mongoose.Promise = global.Promise;

const blogSchema = new Mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: "Debes ingresar un título"
    },
    body: [String],
    date: {
        type: Date,
        default: Date.now
    },
    heroImage: String,
    author: {
        type: String,
        ref: "User",
        required: "You must supply an author"
    }
});

module.exports = Mongoose.model("Blog", blogSchema);

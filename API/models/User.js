const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;
Mongoose.Promise = global.Promise;
const md5 = require("md5");
const validator = require("validator");
const mongodbErrorHandler = require("mongoose-mongodb-errors");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        trim: true,
        required: "Please Supply an username address"
    },
    password: {
        type: String,
        required: "Please supply a password",
        trim: true
    }
});

userSchema.pre("save", function(next) {
    console.log(this.password);
    this.password = md5(this.password);
    console.log(this.password);
    next();
});

userSchema.plugin(passportLocalMongoose, { usernameField: "userName" });
//userSchema.plugin(mongodbErrorHandler);

module.exports = Mongoose.model("User", userSchema);

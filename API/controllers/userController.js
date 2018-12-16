const mongoose = require("mongoose");
const User = mongoose.model("User");
const md5 = require("md5");

exports.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

exports.addUser = async (req, res) => {
    const user = new User({
        userName: "juanpa",
        password: "juanpa"
    });
    await user.save();
    res.json("hello");
};

exports.authenticateUser = async (req, res) => {
    console.log(req.body);
    const users = await User.find({
        userName: req.body.username,
        password: md5(req.body.password)
    });

    console.log(users[0]);

    if (users[0] != undefined) {
        res.json("authenticated");
    } else {
        res.json("Fail");
    }
};

const mongoose = require("mongoose");
const Blog = mongoose.model("Blog");
const multer = require('multer');
const uuid = require('uuid');

const multerOptions = {
	storage: multer.memoryStorage(),
	fileFilter(req, file, next){
        console.log(req);
        console.log(file);
        const isPhoto = file.mimetype.startsWith('image/')
		if (isPhoto){
			next(null, true);
		}else{
			next({message: 'That file isn\'t allowed'}, false);
		}
	}
}

exports.getBlogs = async (req, res) => {
    const blogs = await Blog.find();
    res.json(blogs);
};

exports.upload = multer(multerOptions).single('photo');

exports.resize = async (req, res, next) => {
    // check if there is no new file to resize
    console.log(req.body);
    if (!req.body.heroImage) {
        next(); // skip to the next middleware
        return;
    }
    const extension = req.body.heroImage.mimetype.split('/')[1];
    req.body.photo = `${uuid.v4()}.${extension}`;
    // now we resize
    const photo = await jimp.read(req.body.heroImage.buffer);
    await photo.resize(800, jimp.AUTO);
    await photo.write(`./public/uploads/${req.body.photo}`);
    // once we have written the photo to our filesystem, keep going!
    next();
}

exports.addBlog = async (req, res) => {
    console.log(req.body);
    const blog = new Blog({
        title: req.body.title,
        body: req.body.body,
        heroImage: req.heroImage,
        author: "Juan Pa"
    });
    await blog.save();
};

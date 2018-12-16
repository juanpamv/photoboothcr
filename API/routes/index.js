const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");
const userController = require("../controllers/userController");
const contactController = require("../controllers/contactController");
const { catchErrors } = require("../handlers/errorHandlers");

// user API Blog
router.post("/API/addBlog", 
    blogController.upload,
    catchErrors(blogController.resize),
    catchErrors(blogController.addBlog)
);

router.get("/API/blogs", catchErrors(blogController.getBlogs));

// user API User
router.get("/API/addUser", catchErrors(userController.addUser));
router.get("/API/users", catchErrors(userController.getUsers));
router.post("/API/auth", catchErrors(userController.authenticateUser));

// user API Contact
router.post("/API/contact", catchErrors(contactController.sendMail));
router.post("/API/quote", catchErrors(contactController.quoteMail));

module.exports = router;

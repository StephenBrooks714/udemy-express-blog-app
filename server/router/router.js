const express = require("express");
const router = express.Router();
const cache = require("../config/cache");

const homeController = require("../controller/homePage");
const sendInquiryController = require("../controller/sendInquiry")
const contactController = require("../controller/contactPage");
const sendContactFormController = require("../controller/sendForm");
// blogs
const NewPostController = require("../controller/newPostPage");
const storePostController = require("../controller/storePost");
const blogsController =require("../controller/blogsPage");
const postController = require("../controller/singlePostPage");
const deletePostController = require("../controller/deletePost");
// users
const loginController = require("../controller/loginPage");
const loginUserController = require("../controller/loginUser");
const registerController = require("../controller/registerPage");
const storeUserController = require("../controller/storeUser");
const logoutController = require("../controller/logoutUser");

// middlewares
const authMiddleware = require("../middleware/ifAuthorized");

router.get("/", cache(2), homeController);
router.post("/send/inquiry", sendInquiryController);
router.get("/contact", contactController);
router.post("/send/form", sendContactFormController);
// users
router.get("/register", registerController);
router.post("/store/user", storeUserController);
router.get("/login", loginController);
router.post("/login/user", loginUserController);
router.get("/logout", logoutController);
// blogs
router.get("/newPost", authMiddleware, NewPostController);
router.post("/store/post", storePostController);
router.get("/blogs", cache(2), blogsController);
router.get("/post/:id", cache(2), postController);
router.get("/delete/post/:id", authMiddleware, deletePostController);

module.exports = router;
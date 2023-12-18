// db
const BlogsDb = require("../models/ArticlePost");

module.exports = async (req, res) => {
    const blogs = await BlogsDb.find({}).sort({_id: -1}).populate('userid');
    res.render("index", {
        title: "Home page for client demo built with express",
        blogs
    })
}
// database
const PostDB = require('../models/ArticlePost')

module.exports = async (req, res) => {
    const post = await PostDB.findById(req.params.id).populate('userid')
    res.render("post", {
        title: "Blog post data for more details about the blog.",
        post
    })
}
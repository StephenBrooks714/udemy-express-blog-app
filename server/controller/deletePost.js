// database
const deletePost = require('../models/ArticlePost')

module.exports = async (req, res) => {
    await deletePost.findByIdAndDelete(req.params.id)
    res.redirect('/newPost')
}
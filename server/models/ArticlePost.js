const mongoose = require("mongoose");
const Schema = mongoose.Schema

const ArticlePostSchema = new Schema ({
    title: String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    image: String,
    image2: String,
    body: String,
    datePosted:{
        type: Date,
        default: new Date()
    },
})

const ArticlePost = mongoose.model('ArticlePost', ArticlePostSchema);
module.exports = ArticlePost;
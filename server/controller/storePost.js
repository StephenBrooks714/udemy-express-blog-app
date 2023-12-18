const StorePostDB = require('../models/ArticlePost');
const path = require('path');

module.exports = (req, res) => {
    let image = req.files.image;
    let image2 = req.files.image2;
    image.mv(path.resolve(__dirname, '..', '..', 'public/uploads', image.name), async (error) => {
        image2.mv(path.resolve(__dirname, '..', '..', 'public/uploads', image2.name), async (error) => {
            await StorePostDB.create({
                ...req.body,
                image: '/uploads/' + image.name,
                image2: '/uploads/' + image2.name,
                userid: req.session.userId
            })
            res.redirect('/blogs')
        })
    })
}
"use strict"
const router = require('express').Router()
const {BlogPost, BlogCategory} = require('../controllers/blogController')



router.route('/post')
    .get(BlogCategory.list)
    .post(BlogCategory.create)

router.route('/post/:postId')
    .get(BlogCategory.read)
    .put(BlogCategory.update)
    .delete(BlogCategory.delete)

    /*--------------------------------*/

router.route('/post')
    .get(BlogPost.list)
    .post(BlogPost.create)

router.route('/post/:postId')
    .get(BlogPost.read)
    .put(BlogPost.update)
    .delete(BlogPost.delete)



module.exports = router
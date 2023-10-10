"use strict"

require('express-async-errors')

//Call Models
const { BlogPost,BlogCategory } = require('../models/blogModel')


module.exports.BlogCategory = {
    list: async (req, res) =>{

        // const data = await BlogCategory.find()  // MongoDB'de bütün kayıtlarıu getirme metodu ; find(). 
        const data = await req.getModelList(BlogCategory)
        res.status(200).send({
            error: false,
            count: data.length,
            result: data
        })
    },

    create: async (req, res) =>{

        const data = await BlogCategory.create(req.body) //dışarıdan göndereceğim bilgileri JSON göndercem doprudan kısadan yazıyorum diyorum
        res.status(201).send({
            error: false,
            body: req.body,// gönderdiğim bilgiyi göreyim diyorum
            result: data, //komple hepsini göreyim diyorum 
        })
    },

    read: async (req, res) =>{

        const data = await BlogCategory.findOne({ _id: req.params.categoryId }) 
        res.status(200).send({
            error: false,
            result: data
        })
    },

    update:  async (req, res) =>{

        const data = await BlogCategory.updateOne({_id: req.params.categoryId}, req.body)
        res.status(202).send({
            error: false,
            body: req.body,
            result: data,
            newData: await BlogCategory.findOne({_id: req.params.categoryId}) 
        })
    },

    delete:  async (req, res) =>{
        const data = await BlogCategory.deleteOne({_id: req.params.categoryId})
        
        res.sendStatus((data.deletedCount >= 1 ) ? 204 : 404)
    },
}

/* ------------------------------------------------------------------------------------------------------------ */

module.exports.BlogPost = {
    list: async (req, res) =>{

        const data = await req.getModelList(BlogPost)

        res.status(200).send({
            error: false,
            count: data.length,
            result: data
        })
    },

    listCategoryPosts: async (req, res) => {

        const data = await BlogPost.find({ blogCategoryId: req.params.categoryId }).populate('blogCategoryId')

        res.status(200).send({
            error: false,
            count: data.length,
            result: data
        })
    },

    create: async (req, res) =>{

        const data = await BlogPost.create(req.body) //dışarıdan göndereceğim bilgileri JSON göndercem doprudan kısadan yazıyorum diyorum
        res.status(201).send({
            error: false,
            body: req.body,// gönderdiğim bilgiyi göreyim diyorum
            result: data, //komple hepsini göreyim diyorum 
        })
    },

    read: async (req, res) =>{

        const data = await BlogPost.findOne({ _id: req.params.postId }).populate('blogCategoryId') //alt atblodan üst tablonun verisini görebilmek için populate(). foreign key'den primary key'e yani alt tablodayken bağlandığımız üst tablonun bilgilerini görme
        res.status(200).send({
            error: false,
            result: data
        })
    },

    update:  async (req, res) =>{

        const data = await BlogPost.updateOne({_id: req.params.postId}, req.body)
        res.status(202).send({
            error: false,
            body: req.body,
            result: data,
            newData: await BlogPost.findOne({_id: req.params.postId}) 
        })
    },

    delete:  async (req, res) =>{
        const data = await BlogPost.deleteOne({_id: req.params.postId})
        
        res.sendStatus((data.deletedCount >= 1 ) ? 204 : 404)
    },
}
"use strict"

require('express-async-errors')

const { BlogPost } = require('../models/blogModel')


module.exports.BlogPost = {
    list: async (req, res) =>{

        const data = await BlogPost.find()   // MongoDB'de bütün kayıtlarıu getirme metodu ; find()
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

        const data = await BlogPost.findOne({ _id: req.params.postId }) 
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
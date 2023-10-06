"use strict"

require('express-async-errors')

const { BlogPost } = require('../models/blogModel')


module.exports.BlogPost = {
    list: async (req, res) =>{

        const data = await BlogPost.find()   // MongoDB'de bütün kayıtlarıu getirme metodu ; find()
        res.status(200).send({
            error: false,
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

    },

    update:  async (req, res) =>{

    },

    delete:  async (req, res) =>{

    },
}
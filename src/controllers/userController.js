"use strict"

require('express-async-errors')

const User = require('../models/userModel')


module.exports.User = {
    list: async (req, res) =>{

        const data = await User.find()  // MongoDB'de bütün kayıtları getirme metodu ; find(). 
        res.status(200).send({
            error: false,
            count: data.length,
            result: data
        })
    },

    create: async (req, res) =>{

        const data = await User.create(req.body) //dışarıdan göndereceğim bilgileri JSON göndercem doprudan kısadan yazıyorum diyorum
        res.status(201).send({
            error: false,
            body: req.body,// gönderdiğim bilgiyi göreyim diyorum
            result: data, //komple hepsini göreyim diyorum 
        })
    },

    read: async (req, res) =>{

        const data = await User.findOne({ _id: req.params.userId }) 
        res.status(200).send({
            error: false,
            result: data
        })
    },

    update:  async (req, res) =>{

        const data = await User.updateOne({_id: req.params.userId}, req.body)
        res.status(202).send({
            error: false,
            body: req.body,
            result: data,
            newData: await User.findOne({_id: req.params.userId}) 
        })
    },

    delete:  async (req, res) =>{
        const data = await User.deleteOne({_id: req.params.userId})
        
        res.sendStatus((data.deletedCount >= 1 ) ? 204 : 404)
    },
}
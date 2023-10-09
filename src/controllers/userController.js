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

        const data = await User.create(req.body) //dışarıdan göndereceğim bilgileri JSON göndercem doğrudan kısadan yazıyorum diyorum
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

        const data = await User.updateOne({ _id: req.params.userId }, req.body, { runValidators: true })
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

    login: async (req,res) => {
        const {email, password} = req.body
        if (email && password) {
            const user = await User.findOne({email: email, password: password})  //normaldfe filtreleme yaparken şifre bilgisini de şifreleyip ,şifreli veriyle çakıştırmam gerekioken set metodu burda da çalışıo doğrudan kodu yazabiliorm
            if(user) {
                res.status(200).send({
                    error:false,
                    result:user
                })
            }else {
                res.errorStatusCode= 401
                throw new Error('login parameters is not true.....')
            }
        }else {
            res.errorStatusCode = 400
            throw new Error('login paramters are required')
        }
    }
}
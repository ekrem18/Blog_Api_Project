"use strict"

const mongoose = require('mongoose')
const passwordEncrypt = require('../helpers/passwordEncrypt')

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'Email field must be required'], 
        validate: [
            (email)=> ( email.includes('@') && email.includes('.')) ,   //doğruluk kontrolü yapılıyo
            'Email type is incorrect'  // yukarıya virgül koyduk. 2.parametre de hata mesajı verdiğim yer oluyor
        ]
    },

    password: {
        type: String,
        trim:true,
        required:true,
        set: (password) => passwordEncrypt(password)   // gelen veri nolursa olsun çıktısını bunu yazıyo. Database'e doğrudan yazılmaz şifre bu mantıla yapılıyo.
    },
    
    firstName: String,
    
    lastName: String, 
} , {
    collection: 'users',
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema)
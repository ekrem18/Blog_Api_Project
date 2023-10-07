"use strict"

const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'Email field must be required'], 
        validate: [
            (email)=> ( email.include() && email.include ('.')) ,   //doğruluk kontorlü yapılıyo
            'Email type is incorrect'  // yukarıya virgül koyduk. 2.parametre de hata mesajı verdiğim yer oluyor
        ]
    },

    password: {
        type: String,
        trim:true,
        required:true,
    },
    
    firstName: String,
    
    lastName: String, 
} , {
    collection: 'users',
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema)
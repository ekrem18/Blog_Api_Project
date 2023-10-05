"use strict"

const mongoose = require('mongoose')

// const nameSchema = new mongoose.Schema({
//     //_id: auto created
//     //fieldName: String
//     fieldName: {
//         type: String,                         
//         default: null, 
//         trim: true,
//         select: true,
//         unique: false,                                                 //-----------> Örnek model şeması denilebilir
//         index: false,
//         required: [true, 'error-message'] ,
//         validate: [function(data){return true}, 'error-message'] ,
//         get: function(data){return true},
//         set: function(data){return true},
//     }
// }, {
//     collection: ' collectionName',
//     timestamps: true,
// })

const blogPostSchema = new mongoose.Schema({
    title:{
        type: String,
        trim: true,
        required: true,
    },
    content:{
        type: String,
        trim: true,
        required: true,
    },
    published:{
        type:Boolean,
        default:true,
    }
}   , { collection: 'blogPost',timestamps:true })


const blogPostModel = mongoose.model('BlogPost', blogPostSchema)          //mongoose'da şema oluşturdum, bunu al modele çevir dediğim yer
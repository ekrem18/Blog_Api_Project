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


const blogCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    }
}, {
    collection: 'blogCategories',
    timestamps: true
})

/*---------------------------------------------*/
const blogPostSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId, // Relational ObjectId
        ref: 'User', // ModelName
        required: true,
    },

    blogCategoryId:{
        type: mongoose.Schema.ObjectId,   // Aslında bize lazım olan ObjectId ancak js objectId olarak bir veri türü olmadıpı için bu şekilde bu bilgiyi çekiyoruz.
        required: true,
        ref: 'BlogCategory'

    },

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
}   , { collection:'blogPost', timestamps:true })


//const BlogPostModel = mongoose.model('BlogPost', blogPostSchema)          //mongoose'da şema oluşturdum, bunu al modele çevir dediğim yer. artık gönderweceğim veriler buna göre şekilleniyor.

module.exports={
    //BlogCategory:
    BlogCategory: mongoose.model('BlogCategory', blogCategorySchema),
    BlogPost: mongoose.model('BlogPost', blogPostSchema)
}
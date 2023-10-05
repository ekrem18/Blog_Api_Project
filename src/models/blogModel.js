"use strict"

const mongoose = require('mongoose')

const nameSchema = new mongoose.Schema({
    //_id: auto created

    //fieldName: String

    fieldName: {
        type: String,
        default: null, 
        trim: true,
        select: true,
        unique: false,
        index: false,
        required: [true, 'error-message'] ,
        validate: [function(data){return true}, 'error-message'] ,
        get: function(data){return true},
        set: function(data){return true},
        



    }


}, {})
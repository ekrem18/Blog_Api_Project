"use strict"

const mongoose = require('mongoose')

const nameSchema = new mongoose.Schema({
    //_id: auto created

    //fieldName: String

    fieldName: {
        type: String,
        default: null, 
        trim: true,
        
    }


}, {})
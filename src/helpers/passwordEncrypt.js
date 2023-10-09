"use strict"

const crypto = require('node:crypto') 

const keyCode = process.env.SECRET_KEY || 'sacma_sapan_bisiler'
const loopCount = 10_000
const charsCount = 32 
const encType = 'sha512'

module.exports = function(password){
    const encode = crypto.pbkdf2(password, keyCode, loopCount, charsCount, encType)  // parametre sırası önemli gene. password diye bir bilgi göndericem, şifrelerken kullanacağın anahtarı, kaç kere yapacağının sayısını, çıktıyı 64 karakter ver ve şifrelemee algoritmasını da enm sonda belirtiyorum
    return encode.toString('hex')
}
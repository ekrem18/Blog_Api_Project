"use strict"

const mongoose = require('mongoose') //mongoose modülünü burada çağırıp mongoose değişkenine atıyoruz. atadığımız mongoose değişkeni artık tüm mongoose işlemlerinde kullanılacak. bağlanma komutu ise aşağıda

mongoose.connect('mongodb://localhost:27017/')
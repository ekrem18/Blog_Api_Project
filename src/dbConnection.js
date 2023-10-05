"use strict"

const mongoose = require('mongoose') //mongoose modülünü burada çağırıp mongoose değişkenine atıyoruz. atadığımız mongoose değişkeni artık tüm mongoose işlemlerinde kullanılacak. bağlanma komutu ise aşağıda

mongoose.connect('mongodb://localhost:27017/') // başka yerden bağlanmak isteyebileceğim için elde ettiğimiz bu 'connection string'i değişken/aktif hale getirmeliyim
    .then(()=> console.log('* DB Connected');)
    .catch((err)=> console.log('*DB Not Connected *' , err))
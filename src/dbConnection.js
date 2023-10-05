"use strict"

const mongoose = require('mongoose') //mongoose modülünü burada çağırıp mongoose değişkenine atıyoruz. atadığımız mongoose değişkeni artık tüm mongoose işlemlerinde kullanılacak. bağlanma komutu ise aşağıda

mongoose.connect(process.env.MONGODB || 'mongodb://localhost:27017/') // başka yerden bağlanmak isteyebileceğim için elde ettiğimiz bu 'connection string'i değişken/aktif hale getirmeliyim. bu localhost adresini .env'de tannımladıktan sonra burada ekliyorum
    .then(()=> console.log('* DB Connected *'))
    .catch((err)=> console.log('*DB Not Connected *' , err))




    
    
    
    
    
    
    //yalın hali
// const mongoose = require('mongoose')

// mongoose.connect(process.env.MONGODB)
//     .then(() => console.log(' * DB Connected * '))
//     .catch((err) => console.log(' * DB Not Connected * ', err))
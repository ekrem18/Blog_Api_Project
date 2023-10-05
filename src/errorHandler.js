"use strict"
// Catch Errors:

module.exports = (err, req, res, next) => {

    const errorStatusCode = res.errorStatusCode ?? 500
    //                    = dışarıdan bir statuscode yazdır ve değşikene ata ,yoksa da 500 bastır. Doğrudan statuscode ismiyle yazamıyorum zira response içierisinde default olarak bulunan statuscode ile çakışmasın.

    res.status(errorStatusCode).send({ //.send() metodu stsusu ya<zdıracağımız metod. bunun içerisine object yazıyoruz ki -zorunlu değliz- kendi şablonumu oluşturayım ve okunabilirlik artsın. res.status çalışıyorsa hata var demektir bu hatayaı göreyim
        error : true,



    })

}
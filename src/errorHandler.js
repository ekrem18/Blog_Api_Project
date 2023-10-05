"use strict"
// Catch Errors:

module.exports = (err, req, res, next) => {

    const errorStatusCode = res.errorStatusCode ?? 500
    //                     = dışarıdan bir statuscode yazdır ve değşikene ata ,yoksa da 500 bastır. 

}
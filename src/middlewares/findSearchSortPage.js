"use strict"

        //SEARCHING & SORTING & PAGINATION (blogController -> BlogPost'un içieirisinde oluşturup buraya taşıdım )

module.exports = (req, res, next) =>{

        // SEARCHING: URL?search[key1]=value1&search[key2]=value2
        const search = req.query?.search || {}         // -------------------------------> search'ü query'den aldık
        for (let key in search) search[key] = {$regex: search[key], $options: 'i'} //----> search içierisideki herbir key'i de regex formatına soktuk.Zira içinde arama yapmak istiyorum , komple eşitlemek değil. Gerekli formata girdiği için de find'ın içine gönderdim aşağıda
        
        /*-------------------------------------------------------------------------------------------------*/
        // SORTING: URL?sort[key1]=1&sort[key2]=-1
        const sort = req.query?.sort || {}  //-------------------------------------->şu şekilde yazarak istediğim sonuca ulaşabildiğimi gördüm. burdada şunu diyorum URL içerisinde sort ile belirlenmiş alan varsa getir yoksa boş obje çağır. 
        
        /*-------------------------------------------------------------------------------------------------*/
        // PAGINATION: URL?page=1&limit=10
        let limit = Number(req.query?.limit) //-------------------------------> URL içerisinde limti varsa onu al limit olarak tanımla
        limit= limit > 0 ? limit : Number(process.env?.PAGE_SIZE || 20) //----> Number olarak geleceği için limit>0'sa limit değilse .env'ye git
        console.log('limit', typeof limit, limit);

        let page = Number(req.query?.page)
        page = (page>0 ? page : 1) - 1  //------------------------------------> çıkarma işlemi yaptığımız için number'a çevirmeye gerek kalmadı
        console.log('page', typeof page, page);
        
        let skip = Number(req.query?.skip)
        skip = skip > 0 ? skip : (page*limit)
        console.log('skip', typeof skip, skip);
        
}
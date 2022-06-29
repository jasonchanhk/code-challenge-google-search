const data = require('../data')

class Result{

    static get all(){
        return data
    }

    static findByKeyword(keyword){
        try{
            const searchData = data.filter((item) => item.keyword === keyword)
            if(searchData.length == 0) throw "Our google does not support this keyword!"
            return searchData
        }catch(err){
            throw new Error(err)
        }
    }
}

module.exports = Result

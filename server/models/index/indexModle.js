const path = require('path')
const fsService = require('../../services/fs/fsService')

// console.log(fsService)

class IndexModel {
    constructor () {
        
    }

    async getModel () {
        return await new Promise((resolve, reject) => {
            fsService.getDirs(path.join(__dirname, '../../../src'))
            .then((value)=>{
                // console.log(value)
                resolve(value)
            })
        })
    }


}



module.exports = new IndexModel()
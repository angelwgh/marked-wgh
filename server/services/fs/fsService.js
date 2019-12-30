const fs = require('fs');
const conf = require('../conf')


/**
 * 文件系统服务
 * getDirs 获取路径下所有文件和文件夹信息
 */

class FsService {
    constructor() {
        this.fs = fs;
    }
    
    // 获取某个路径下所有文件夹
    async getDirs (path) {
        var result = []
        await this.readdir(path).then( data => {
            // console.log(data)
            result = data.dirs
            // console.log(result)
        })

        return result;
    }

    /**
     * 获取某个路径下所有文件夹和文件
     */
    async readdir (path) {
        var results = {
            dirs: [],
            files: [],
            err:[]
        }
        await new Promise( (resolve, reject) => {
            // 获取路径下所有文件和文件夹,返回一个文件名/文件夹名的数组['demo','povertyRelief','povertyRelief']
            fs.readdir(path, (err,files) => {
                // console.log(files)
                // console.log(err)
                // results = files
                if(err){
                    resolve()
                }else {
                    Promise.all(files.map(name => this.getFileType(path , name)))
                    .then((data)=> {

                        data.forEach((item) => {
                            if(item.type === 'dir'){
                                results.dirs.push(item)
                            }else if(item.type === 'file'){
                                results.files.push(item)
                            }else {
                                results.err.push(item)
                            }
                        })
                        resolve()
                    })
                }
               
            })

        })
        return results
    }

    // 判断某个路径是文件夹还是文件
    async getFileType (path, name) {

        var result = {}
        await new Promise( (resolve, reject) => {
            fs.stat(path + '/' + name, (err, stat)=> {
                // console.log(err)
                if(err){
                    result = {
                        type: null,
                        name:null,
                        msg:'读取错误'
                    }
                }else{
                    result.type = stat.isDirectory() ? 'dir': 'file';
                    result.name = name;
                    result.msg = null
                }
                resolve()
            })
        })
        return result
    }
}



module.exports = new FsService()
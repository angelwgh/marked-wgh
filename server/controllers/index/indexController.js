const indexModel = require('../../models/index/indexModle')

class IndexContrller {
    constructor() {

    }

    render (req, res){
        indexModel.getModel().then((model) => {
            console.log(model)

            res.render('index/index', {list: model})
        })
        // res.render('index/index' , {a : 'controller'})
    }
}

module.exports = new IndexContrller()
const mongoos = require("mongoos")

const urlSchema = mongoos.Schema({
    shortId:{
        type:String,
        require:true,
        unique:true
    },
    redirectionUrl:{
        type:String,
        require:true
    },
    visitHistory: [{ timeStamp : {type:String }}],
}, {timeStamp:true})

const URL = mongoos.model("url",urlSchema)

module.exports = URL
const mongoose = require("mongoose");
const { boolean } = require("zod");
/*
Todo{
    title : string,
    description : string,
    completed: boolean
}
*/
mongoose.connect("mongodb+srv://pragyanthapa:Pragyanthapa2004@atlascluster.0ybldmh.mongodb.net/")

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})
const todo = mongoose.model('todos',todoSchema)
module.exports = {
    todo:todo
}
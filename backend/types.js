const zod = require("zod");

const createTodo = zod.object({
    title:zod.string(),
    descripton:zod.string()
})
const updateTodo = zod.object({
    id:zod.string()
})

module.exports = {
    createTodo : createTodo,
    updateTodo : updateTodo
}
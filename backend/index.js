// write basic express boilerplate code
// with express.json() middleware

const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require('cors')
const app = express();
const port = 3000

app.use(express.json());
app.use(cors())


app.post("/todo",async function(req,res){
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad);
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg:"You have sent the wrong input",
        })
        return;    
    }
    await todo.create({
            title: createPayLoad.title,
            description: createPayLoad.description,
            completed : false
        })
        res.json({
            msg:"Todo created"
        }) 
    // put it in the mongodb
})

app.get("/todos",async function(req,res){
    const todos = await todos.find({});
    console.log(todos);
    res.json({
        todos
    })
})

app.put("/completed",async function(req,res){
    const updatePayLoad = req.body;
    const parsedPayLoad = updateTodo.safeParse(updatePayLoad)
    if(!parsedPayLoad){
      res.status(411).json({
        msg:"You have sent the wrong input"
      })
      return;
}
await todo.update({
    _id:req.body
},{
    completed : true
})
res.json({
    msg:"Todo marked as completed"
})
})

app.listen(port,()=>{
    console.log(`Server is running at port ${port}...`);
})
